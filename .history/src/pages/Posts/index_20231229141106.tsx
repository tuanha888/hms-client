import React, { useState } from "react";
import { useFetchData } from "../../components/hooks/useFethData";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post-actions";
import { AppDispatch, RootState } from "../../redux";
import PostImg from "../../assets/images/post.jpg";
import "./Posts.scss";
import { v4 } from "uuid";
import { getCategories } from "../../redux/actions/category-actions";
const Posts = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getPosts()), dispatch(getCategories())]);
  });
  const [activeCategory, setActiveCategory] = useState("All");
  const handleClickCategory = (name: string) => setActiveCategory(name);
  const posts = useSelector((state: RootState) => state.post.posts);
  const postsRender = posts.filter((post) => {
    if (activeCategory === "All") return post;
    else return post.categoryName == activeCategory;
  });
  const firstPost = postsRender[0];
  const otherPosts = postsRender.filter((post, i) => {
    if (i != 0) return post;
  });
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const renderCategories = () => {
    const newCategories = categories.map((category) => {
      return (
        <li
          className={`posts-cate-item ${
            category.name === activeCategory ? "actived" : ""
          }`}
          onClick={() => handleClickCategory(category.name)}
          key={category.id}
        >
          {category.name}
        </li>
      );
    });
    newCategories.push(
      <li
        className={`posts-cate-item ${
          activeCategory === "All" ? "actived" : ""
        }`}
        onClick={() => handleClickCategory("All")}
        key={v4()}
      >
        Tất cả
      </li>
    );
    return newCategories.reverse();
  };
  return (
    <div className="posts">
      <div className="posts-container">
        <div className="posts-header">
          <span className="posts-header-content">Bài viết</span>
        </div>
        {isFetched && (
          <div className="posts-cate-container">
            <ul className="posts-cate-list">{renderCategories()}</ul>
          </div>
        )}
        {isFetched && (
          <>
            <div className="posts-outstanding"></div>
            <ul className="posts-list"></ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
