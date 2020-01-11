export default (state = {}, action = {}) => {
    switch (action.type) {
        case "SET_DESERT_PLANTS":
            // console.log("REDUCER DESERT!", action);
            return { desert: action.payload, ...state };
        case "SET_SNOW_PLANTS":
            // console.log("REDUCER DESERT!", action);
            return { snow: action.payload, ...state };
        case "SET_RAINFOREST_PLANTS":
            // console.log("REDUCER DESERT!", action);
            return { rainforest: action.payload, ...state };
        default:
            return state;
    }
};
