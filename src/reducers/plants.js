export default (state = [], action = {}) => {
  // console.log("REDUCER PLANTS!");
  switch (action.type) {
    case "SET_PLANTS":
      return action.payload.map(plant => ({ ...plant }));
    default:
      return state;
  }
};
