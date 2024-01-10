import React from "react";
import { useFetchData } from "../../components/hooks/useFethData";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post-actions";
import { AppDispatch, RootState } from "../../redux";
import PostImg from "../../assets/images/post.jpg";
import "./Posts.scss";
import {v4}  from 'uuid'
import { getCategories } from "../../redux/actions/category-actions";
const Posts = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return Promise.all([dispatch(getPosts()), dispatch(getCategories())]);
  });
  const posts = useSelector((state: RootState) => state.post.posts);
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const renderCategories = () => {
    const newCategories = categories.map((category) => {
      return (
        <li className="posts-cate-item" key={category.id}>
          {category.name}
        </li>
      );
    });
    return newCategories.push(<li className="posts-cate-item" key={v4()}}>
    "Tất cả"
  </li>)
  };
  return (
    <div className="posts">
      <div className="posts-container">
        <div className="posts-header">
          <span className="posts-header-content">Bài viết</span>
        </div>
        {isFetched && <ul className="posts-cate-list">{renderCategories()}</ul>}
      </div>
    </div>
  );
};

export default Posts;
