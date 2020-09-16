import React from "react";
import "./UserLists.css";
import UserItem from "./UserItem";

const UserLists = (props) => {
  const users = [
    {
      id: 1516,
      name: "Bob Dhillon",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
    {
      id: 1516,
      name: "Bob Dhillon",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
    {
      id: 1516,
      name: "Bob Dhillon",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
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
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
              />
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