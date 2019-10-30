export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_DESERT_PLANTS":
        console.log("REDUCER DESERT!", action);
      return action.payload.map(plant => ({ ...plant }));
    default:
      return state;
  }
};