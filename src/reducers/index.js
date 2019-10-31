import { combineReducers } from "redux";
import plants from "./plants";
import snow from "./snow";
import desert from './desert';
import rainforest from './rainforest'

export default combineReducers({
  plants,
  snow,
  desert,
  rainforest
});