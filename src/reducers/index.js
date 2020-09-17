import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import placesReducer from "./placesReducer";
import signInReducer from "./signInReducer";

export default combineReducers({
  router: routerReducer,
  auth: signInReducer,
  places: placesReducer,
});
