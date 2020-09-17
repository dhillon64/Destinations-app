import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import SignIn from "../Login";
import { connect } from "react-redux";

const MainHeader = ({ isSignedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar
        className="bg-danger"
        dark
        expand="md"
        style={{ padding: "20px" }}
      >
        <Link
          onClick={isOpen ? toggle : ""}
          style={{ textDecoration: "none" }}
          to="/"
        >
          <h2 style={{ color: "white", fontWeight: "bolder" }}>YourPlaces</h2>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem onClick={isOpen ? toggle : ""}>
              <Link style={{ textDecoration: "none" }} to="/">
                <h4
                  style={{
                    color: "white",
                    marginRight: "20px",
                    marginTop: "5px",
                  }}
                >
                  ALL USERS
                </h4>
              </Link>
            </NavItem>
            <NavItem onClick={isOpen ? toggle : ""}>
              <Link style={{ textDecoration: "none" }} to="/u2/places">
                <h4
                  style={{
                    color: "white",
                    marginRight: "20px",
                    marginTop: "5px",
                  }}
                >
                  {isSignedIn ? "MY PLACES" : ""}
                </h4>
              </Link>
            </NavItem>
            <NavItem onClick={isOpen ? toggle : ""} className="mr-3">
              <Link style={{ textDecoration: "none" }} to="/places/new">
                <h4
                  style={{
                    color: "white",
                    marginRight: "20px",
                    marginTop: "5px",
                  }}
                >
                  {isSignedIn ? "ADD NEW PLACE" : ""}
                </h4>
              </Link>
            </NavItem>
            <NavItem>
              <SignIn />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth,
  };
};

export default connect(mapStateToProps)(MainHeader);
