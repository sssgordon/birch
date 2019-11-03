export default (state = [], action = {}) => {
    // console.log("Reducer from wishlist");
    switch (action.type) {
      case "ADD_WISH_PLANT":
        return [...state, { ...action.payload }];
    //   case "REMOVE_WISH_PLANT":
    //     return state.filter(plant => plant.id !== action.payload);
      default:
        return state;
    }
  };
  