import { ADD_GACHA, SET_GACHA, ADD_GACHA_PULL } from '../constants/action-types';

const initialState = {
    gachas: [],
    currentGacha: {},
    pulls: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GACHA:
            return { ...state, gachas: [...state.gachas, action.payload] }
        case SET_GACHA:
            return { ...state, currentGacha: action.payload }
        case ADD_GACHA_PULL:
            return { ...state, pulls: [...state.pulls, action.payload] }
        default:
            return state;
    }
}

export default rootReducer;
