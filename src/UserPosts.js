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
      <Route exact path={`${url}`}>
        <div>
          <div>
            <ul>{postLinks}</ul>
            <div>
              <p>No post selected...</p>
            </div>
          </div>
        </div>
      </Route>
      <Route exact path={`${url}/:postId`}>
        <div>
          <div>
            <ul>{postLinks}</ul>
            <div>
              <UserPost posts={posts} />
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default UserPosts;
