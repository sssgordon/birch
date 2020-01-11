import { combineReducers } from "redux";
import plants from "./plants";

// import rainforest from "./rainforest";
import basket from "./basket";
import wishlist from "./wishlist";
import products from "./products";

export default combineReducers({
    plants,

    // rainforest,
    basket,
    wishlist,
    products
});
