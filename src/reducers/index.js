import { combineReducers } from "redux";
import plants from "./plants";
import basket from "./basket";
import wishlist from "./wishlist";
import products from "./products";

export default combineReducers({
    plants,
    basket,
    wishlist,
    products
});
