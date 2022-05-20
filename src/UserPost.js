import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

export const UserPost = ({ posts = [] }) => {
  const { postId } = useParams();
  const { path } = useRouteMatch();
  console.log(posts);

  if (!postId) {
    throw new Error("No URL parameter for postId");
  }

  const post = posts.find((post) => `${post.id}` === postId);

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  );
};

export default UserPost;
