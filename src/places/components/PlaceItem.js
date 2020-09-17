import React from "react";
import ModalExample from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { connect } from "react-redux";

const PlaceItem = (props, { places }) => {
  const renderTitle = () => {
    return <button>View On Map</button>;
  };

  return (
    <div
      class="ui centered card"
      style={{ width: "1000px", marginTop: "20px", marginBottom: "20px" }}
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
          <div class="ui green button">
            <ModalExample
              buttonLabel="View On Map"
              title={props.title}
              description={<Map center={props.coordinates} zoom={16} />}
            />
          </div>
          <div class="ui yellow button">
            <ModalExample buttonLabel="Edit" />
          </div>
          <div class="ui red button">
            <ModalExample buttonLabel="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places.location,
  };
};

export default connect(mapStateToProps)(PlaceItem);

//<div class="ui green button">View On Map</div>
//<div class="ui yellow button">Edit</div>
//<div class="ui red button">Delete</div>
