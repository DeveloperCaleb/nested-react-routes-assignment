import React from "react";
import { Route } from "react-router-dom";
import Users from "./Users";
import users from "./data.json";
import User from "./User";
import UserPost from "./UserPost";

function App() {
  return (
    <div className="App">
      <Route exact={true} path="/">
        <Users users={users} />
      </Route>
      <Route path="/users/:userId">
        <User users={users} />
      </Route>
    </div>
  );
}

export default App;
