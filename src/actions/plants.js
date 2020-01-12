// base URL for the backend
const baseURL = 'https://tranquil-shelf-90083.herokuapp.com/'

//PLANTS
export const SET_PLANTS = "SET_PLANTS";

export function setPlants(plants) {
    return {
        type: SET_PLANTS,
        payload: plants
    };
}

export function getPlants() {
    return function(dispatch) {
        fetch(`${baseURL}/products`)
            .then(res => res.json())
            .then(data => {
                dispatch(setPlants(data));
            });
    };
}

//SNOW PLANTS
export const SET_SNOW_PLANTS = "SET_SNOW_PLANTS";

export function setSnowPlants(plants) {
    return {
        type: SET_SNOW_PLANTS,
        payload: plants
    };
}

export function getSnowPlants() {
    return function(dispatch) {
        fetch(`${baseURL}/products`)
            .then(res => res.json())
            .then(data => data.filter(plant => plant.categoryId === 2))
            .then(filteredData => {
                dispatch(setSnowPlants(filteredData));
            });
    };
}

//DESERT PLANTS
export const SET_DESERT_PLANTS = "SET_DESERT_PLANTS";

export function setDesertPlants(plants) {
    return {
        type: SET_DESERT_PLANTS,
        payload: plants
    };
}

export function getDesertPlants() {
    return function(dispatch) {
        fetch(`${baseURL}/products`)
            .then(res => res.json())
            .then(data => data.filter(plant => plant.categoryId === 1))
            .then(data => {
                dispatch(setDesertPlants(data));
            });
    };
}

//RAINFOREST PLANTS
export const SET_RAINFOREST_PLANTS = "SET_RAINFOREST_PLANTS";

export function setRainforestPlants(plants) {
    return {
        type: SET_RAINFOREST_PLANTS,
        payload: plants
    };
}

export function getRainforestPlants() {
    return function(dispatch) {
        fetch(`${baseURL}/products`)
            .then(res => res.json())
            .then(data => data.filter(plant => plant.categoryId === 3))
            .then(filteredData => {
                dispatch(setRainforestPlants(filteredData));
            });
    };
}
