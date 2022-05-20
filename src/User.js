import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();
  const { path, url } = useRouteMatch()

  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <Switch>
          <Route exact={true} path={`${url}`}>
        <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={`${url}`} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/posts`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>
          </div>
          <UserProfile user={user} />
          </Route>
          <Route exact={true} path={`${path}/posts`}>
                  <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={`${url}`} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/posts`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>
          </div>
            <UserPosts posts={user.posts} />
          </Route>   
        </Switch>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default User;
