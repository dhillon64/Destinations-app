import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Map from "./Map";

const ModalExample = (props, { places }) => {
  const { buttonLabel, className, description } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const location = {
    lat: 40.7484405,
    lng: -73.9878531,
  };

  return (
    <div>
      <div className="button" onClick={toggle}>
        {buttonLabel}
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader
          style={{
            backgroundColor: "darkblue",
            color: "white",
          }}
          toggle={toggle}
        >
          {props.title}
        </ModalHeader>
        <ModalBody>{props.description}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
