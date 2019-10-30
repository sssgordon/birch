//PLANTS
export const SET_PLANTS = "SET_PLANTS";

export function setPlants(plants) {
  console.log("ACTION: SET PLANTS!");
  return {
    type: SET_PLANTS,
    payload: plants
  };
}

export function getPlants() {
  console.log("THUNK ACTION: GET PLANTS!");
  return function(dispatch) {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => {
        console.log("FETCHED: PLANTS!", data);
        dispatch(setPlants(data));
      });
  };
}

//SNOW PLANTS
export const SET_SNOW_PLANTS = "SET_SNOW_PLANTS";

export function setSnowPlants(plants) {
  console.log("ACTION: SET SNOW PLANTS!");
  return {
    type: SET_SNOW_PLANTS,
    payload: plants
  };
}

export function getSnowPlants() {
  console.log("THUNK: GET SNOW PLANTS!");
  return function(dispatch) {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => data.filter(plant => plant.categoryId === 2))
      .then(filteredData => {
        console.log("FETCHED: SNOW PLANTS!", filteredData);
        dispatch(setSnowPlants(filteredData));
      });
  };
}
