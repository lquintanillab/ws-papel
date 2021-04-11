import { types } from "../types/types";

const initialState = []

export const descuentosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadDescuentos:
            return [...state, ...action.payload]
        default:
            return state;
    }
}