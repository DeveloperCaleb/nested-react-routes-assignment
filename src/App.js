import React from "react";
import { Route, Switch } from "react-router-dom";
import users from "./data.json";
import User from "./User";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Users users={users} />
        </Route>
        <Route path="/users/:userId">
          <User users={users} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
