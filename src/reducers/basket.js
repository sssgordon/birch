export default (state = [], action = {}) => {
  // console.log("REDUCER: BASKET");
  switch (action.type) {
    case "ADD_PLANT":
      return [...state, { ...action.payload }];
    case "REMOVE_PLANT":
      return state.filter(plant => plant.id !== action.payload);
    default:
      return state;
  }
};
