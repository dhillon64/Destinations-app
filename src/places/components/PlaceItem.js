import React from "react";

const PlaceItem = (props) => {
  return (
    <div
      class="ui centered card"
      style={{ width: "1000px", marginTop: "20px" }}
    >
      <div class="image">
        <img src={props.image} />
      </div>
      <div class="content">
        <h2 class="center aligned header">{props.title}</h2>
        <h2 style={{ marginTop: "10px" }} class=" center aligned header">
          {props.address}
        </h2>
        <div class="center aligned description">{props.description}</div>
      </div>
      <div class="extra content">
        <div class="ui three buttons">
          <div class="ui basic green button">View On Map</div>
          <div class="ui basic yellow button">Edit</div>
          <div class="ui basic red button">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
