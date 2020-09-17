import React from "react";
import "./UserLists.css";
import UserItem from "./UserItem";
import { NavLink } from "react-router-dom";

const UserLists = (props) => {
  const users = [
    {
      id: 1516,
      name: "Bob Dhillon",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
      userId: "u1",
    },
    {
      id: 1516,
      name: "Parminder Dhillon",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
      userId: "u2",
    },
    {
      id: 1516,
      name: "Johnny bravo",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
      userId: "u3",
    },
  ];
  /*{
    id: 1516,
    name: "Bond Vich",
    image:
      "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    places: 3,
  },*/

  const renderList = () => {
    if (users.length === 0) {
      return (
        <div className="center">
          <h2>No Users Found</h2>
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <div className="ui stackable cards">
            {users.map((user) => (
              <NavLink
                to={`/${user.userId}/places`}
                style={{ textDecoration: "none" }}
              >
                <UserItem
                  key={user.id}
                  id={user.id}
                  image={user.image}
                  name={user.name}
                  placeCount={user.places}
                />
              </NavLink>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <br />
      <br />
      {renderList()}
    </div>
  );
};

export default UserLists;
