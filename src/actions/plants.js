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
