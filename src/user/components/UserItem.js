import React from "react";
import "./Useritem.css";

const UserItem = (props) => {
  return (
    <div
      id="hover"
      className="ui centered raised link card"
      style={{ backgroundColor: "black", width: "430px", marginTop: "10px" }}
    >
      <div className="content">
        <img
          className="left floated ui avatar image"
          style={{ height: "150px", width: "150px" }}
          src={props.image}
        />
        <div
          id="title"
          className="center aligned header"
          style={{ marginTop: "50px", color: "yellow" }}
        >
          <h3>{props.name}</h3>
        </div>
        <div
          id="places"
          className="center aligned meta"
          style={{ color: "white" }}
        >
          <strong>
            <p>
              {props.placeCount} {props.places === 1 ? "Place" : "Places"}
            </p>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
