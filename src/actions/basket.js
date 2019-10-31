export const ADD_PLANT = "ADD_PLANT";

export function addPlant(plant) {
  console.log("ACTION: ADD PLANT TO BASKET!");
  return {
    type: ADD_PLANT,
    payload: plant
  };
}
