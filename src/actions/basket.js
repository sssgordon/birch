export const ADD_PLANT = "ADD_PLANT";
export function addPlant(plant) {
  // console.log("ACTION: ADD PLANT TO BASKET!");
  return {
    type: ADD_PLANT,
    payload: plant
  };
}

export const REMOVE_PLANT = "REMOVE_PLANT";
export function removePlant(id) {
  // console.log("ACTION: REMOVE PLANT FROM BASKET");
  return {
    type: REMOVE_PLANT,
    payload: id
  };
}
