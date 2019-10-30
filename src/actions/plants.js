export const SET_PLANTS = "SET_PLANTS";

export function setPlants(plants) {
  // console.log("ACTION: SET PLANTS!");
  return {
    type: SET_PLANTS,
    payload: plants
  };
}

export function getPlants() {
  // console.log("THUNK ACTION: GET PLANTS!");
  return function(dispatch) {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => {
        console.log("FETCHED: PLANTS!", data);
        dispatch(setPlants(data));
      });
  };
}

//DESERT PLANTS
export const SET_DESERT_PLANTS = "SET_DESERT_PLANTS";

export function setDesertPlants(plants) {
  console.log("ACTION: SET DESERT PLANTS!", plants);
  return {
    type: SET_DESERT_PLANTS,
    payload: plants
  };
}

export function getDesertPlants() {
  console.log("THUNK: GET DESERT PLANTS!");
  return function(dispatch) {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => data.filter(plant => plant.categoryId === 1))
      .then(data => {
        console.log("FETCHED: DESERT PLANTS!", data);
        dispatch(setDesertPlants(data));
      });
  };
}