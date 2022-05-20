import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

export const UserProfile = ({ user = {} }) => {
  const { url } = useRouteMatch();
  return (
    <div>
      <div>
        <h2>{user.name}</h2>
        <ul>
          <li>
            <NavLink to={`${url}/posts`} data-testid="user-posts">
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <label>User Name</label>
        </div>
        <div>{user.username}</div>
      </div>
      <hr />
      <div>
        <div>
          <label>EMail</label>
        </div>
        <div>{user.email}</div>
      </div>
      <hr />
      <div>
        <div>
          <label>Phone</label>
        </div>
        <div>{user.phone}</div>
      </div>
      <hr />
      <div>
        <div>
          <label>Company</label>
        </div>
        <div>{(user.company || {}).name}</div>
      </div>
      <hr />
      <div>
        <div>
          <label>Website</label>
        </div>
        <div>{user.website}</div>
      </div>
      <hr />
    </div>
  );
};

export default UserProfile;
