import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url, path } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <Switch>
      <Route path={`${path}/:postId`}>
        <UserPost posts={posts} />
      </Route>
      <Route exact path={`${path}`}>
        <div>
          <div>
            <ul>{postLinks}</ul>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default UserPosts;
