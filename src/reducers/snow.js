export default (state = [], action = {}) => {
  // console.log("REDUCER SNOW!");
  switch (action.type) {
    case "SET_SNOW_PLANTS":
      return action.payload.map(plant => ({ ...plant }));
    default:
      return state;
  }
};
