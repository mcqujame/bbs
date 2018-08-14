import { ADD_GACHA, SET_GACHA, ADD_GACHA_PULL } from '../constants/action-types';

export const addGacha = gacha => ({
    type: ADD_GACHA,
    payload: gacha
});

export const setGacha = gacha => ({
    type: SET_GACHA,
    payload: gacha
});

export const addGachaPull = pull => ({
    type: ADD_GACHA_PULL,
    payload: pull
});
