import { types } from "../types/types";

const initialState = {
    loading: false,
    contact:false,
    msgError: null,
    showCart: false,
    breadcrumbPath:[{nivel: 1,path:"/catalogo", name: 'Productos'}]
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
            
        case types.uiRemoveError:

            return {
                ...state,
                msgError: null
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading:true
            } 
        case types.uiEndLoading:
            return {
                ...state,
                loading:false
            } 
        case types.uiSetContact:
            return {
                    ...state,
                    contact:true
            } 
        
        case types.showCart:
            return {
                ...state,
                showCart: true
            } 
        
        case types.uiBreadcrumbUpdate:
            if(action.payload.nivel === 2){
                return {
                    ...state,
                    breadcrumbPath: [ state.breadcrumbPath[0], action.payload]
                }
            }else if(action.payload.nivel === 3){
                return {
                    ...state,
                    breadcrumbPath: [ state.breadcrumbPath[0], state.breadcrumbPath[1], action.payload]
                }
            }else{
                return {
                    ...state,
                    breadcrumbPath: [ state.breadcrumbPath[0]]
                }
            }

        default:
            return {...state};
    }
}