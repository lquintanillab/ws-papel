import { types } from "../types/types";

export const profileReducer = (state = {}, action) => {
    switch (action.type) {

        case types.loadProfile:
            return action.payload ? action.payload : state
        
        case types.removeProfile :
            return {}
    
        default:
            return state    
        
    }
}


