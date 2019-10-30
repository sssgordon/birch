import { combineReducers } from "redux";
import plants from "./plants";
import desert from './desert'

export default combineReducers({
  plants,
  desert
});
