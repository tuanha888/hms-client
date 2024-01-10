import React from "react";
import { useFetchData } from "../../components/hooks/useFethData";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post-actions";
import { AppDispatch, RootState } from "../../redux";
import PostImg from "../../assets/images/post.jpg";
import "./Posts.scss";
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
    return categories.map((category) => {
      return <li className="posts-cate-item">{category}</li>;
    });
  };
  return (
    <div className="posts">
      <div className="posts-header">
        <span className="posts-header-content">Bài viết</span>
      </div>
      {isFetched && (
        <ul className="posts-cate-list">
          <li className="posts-cate-item"></li>
        </ul>
      )}
    </div>
  );
};

export default Posts;
