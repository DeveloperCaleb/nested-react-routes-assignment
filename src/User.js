import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();
  const { path } = useRouteMatch();

  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <Switch>
          <Route path={`${path}/posts`}>
            <UserPosts posts={user.posts} />
          </Route>
          <Route path={`${path}`}>
            <UserProfile user={user} />
          </Route>
        </Switch>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default User;
