import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Users from "./user/components/Users";
import NewPlace from "./places/pages/NewPlace";
import UserLists from "./user/components/UserLists";
import PlaceList from "./places/components/PlaceList";
import MainHeader from "./user/components/navigation/MainHeader";

function App() {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route exact path="/">
          <UserLists />
        </Route>
        <Route exact path="/places/new">
          <NewPlace />
        </Route>
        <Route exact path="/:userId/places">
          <PlaceList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
