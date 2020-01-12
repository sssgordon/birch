export const ADD_WISH_PLANT = "ADD_WISH_PLANT";
export function addWishPlant(plant) {
  return {
    type: ADD_WISH_PLANT,
    payload: plant
  };
}

export const REMOVE_WISH_PLANT = "REMOVE_WISH_PLANT";
export function removeWishPlant(id) {
  // console.log("ACTION: REMOVE PLANT FROM WISHLIST");
  return {
    type: REMOVE_WISH_PLANT,
    payload: id
  };
}
