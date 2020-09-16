import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

const SignIn = ({ signIn, signOut, isSignedIn }) => {
  const onSignIn = () => {
    signIn();
  };

  const onSignOut = () => {
    signOut();
  };

  const renderSignIn = () => {
    if (!isSignedIn) {
      return (
        <div>
          <button onClick={onSignIn} className="ui yellow button">
            Log In
          </button>
          <button className="ui yellow button">Sign Up</button>
        </div>
      );
    } else {
      return (
        <button onClick={onSignOut} className="ui yellow button">
          Log Out
        </button>
      );
    }
  };

  return <div>{renderSignIn()}</div>;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
