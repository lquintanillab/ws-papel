import { types } from "../types/types";

const initialState = []

export const productosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadProductos:
            return [...action.payload]
        default:
            return state;
    }
}