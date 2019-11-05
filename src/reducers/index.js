import { combineReducers } from "redux";
import plants from "./plants";
import snow from "./snow";
import desert from "./desert";
import rainforest from "./rainforest";
import basket from "./basket";
import wishlist from "./wishlist";

export default combineReducers({
  plants,
  snow,
  desert,
  rainforest,
  basket,
  wishlist
});
