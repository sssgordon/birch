export default (state = [], action = {}) => {
  console.log("REDUCER: BASKET");
  switch (action.type) {
    case "ADD_PLANT":
      return [...state, { ...action.payload }];
    case "SET_BASKET_PLANT":
      return action.payload.map(plant => ({ ...plant }));
    default:
      return state;
  }
};
