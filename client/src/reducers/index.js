import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import car from "./car";

export default combineReducers({ alert, auth, car });
