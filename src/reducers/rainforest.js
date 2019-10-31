export default (state = [], action = {}) => {
    switch (action.type) {
      case "SET_RAINFOREST_PLANTS":
        //   console.log("REDUCER RAINFOREST!", action);
        return action.payload.map(plant => ({ ...plant }));
      default:
        return state;
    }
  };