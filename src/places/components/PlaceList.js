import React from "react";
import { connect } from "react-redux";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import { useParams } from "react-router-dom";

const PlaceList = ({ places }) => {
  /*const places = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
      creator: "u1",
    },
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
      creator: "u1",
    },
  ];*/

  const userId = useParams().userId;
  const loadedPlaces = places.filter((place) => place.creator === userId);

  if (loadedPlaces.length === 0) {
    return (
      <div style={{ textAlign: "center" }} class="ui centered card">
        <div class="content">
          <div class="header">No Places found. Maybe Create One?</div>
        </div>
        <div class="content">
          <button class="ui button">Share Place</button>
        </div>
      </div>
    );
  }

  return (
    <div className="ui container">
      {loadedPlaces.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places,
  };
};

export default connect(mapStateToProps)(PlaceList);
