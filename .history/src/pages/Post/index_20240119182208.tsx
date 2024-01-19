import React from "react";
import { Post as PostV2 } from "../../redux/features/postSlice";
interface PostProps {
  post: PostV2;
}
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="container">
      <div className="post-img">
        <img src={post.cover} alt="" />
      </div>
      <p className="post-title">{post.title}</p>
    </div>
  );
};

export default Post;
