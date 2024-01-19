import React from "react";
import { Post as PostV2 } from "../../redux/features/postSlice";
import { AppDispatch, RootState } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "../../components/hooks/useFethData";
import { getPost } from "../../redux/actions/post-actions";
interface PostProps {
  id: string;
}
const Post: React.FC<PostProps> = ({ id }) => {
  const dispatch: AppDispatch = useDispatch();
  const post = useSelector((state: RootState) =>
    state.post.posts.filter((post) => post.id === id)
  )[0];
  const isFetched =
    post !== null
      ? true
      : useFetchData(() => {
          return dispatch(getPost(id));
        });
  return (
    <>
      {isFetched && (
        <div className="container">
          <div className="post-img">
            <img src={post.cover} alt="" />
          </div>
          <p className="post-title">{post.title}</p>
        </div>
      )}
    </>
  );
};

export default Post;
