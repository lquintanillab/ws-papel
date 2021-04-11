import { types } from "../types/types";

const initialState = {
    userId:'',
    productos: [],
    total: 0.00,
    importeDesc: 0.00,
    descuento: 0.00,
    dateCreated:'',
    lastUpdated:'',
    pendiente: true

}

export const carritoReducer = (state = initialState, action) =>{
    switch (action.type) {
    
        case types.carritoAddProduct:
           
            return {
                ...state, 
                productos: [...state.productos, action.payload.producto],
                total: action.payload.total,
                importeDesc: action.payload.importeParaDescuento,
                descuento: action.payload.descuento,
            }
        case types.carritoVaciar:
            return {
                ...state,
                productos:[],
                total:0.00,
                descuento: 0.00,
                importeDesc: 0.00,
            }
        case types.carritoRemoveProduct:
            return {
                ...state,
                productos: action.payload.productos,
                total: action.payload.total, 
                importeDesc: action.payload.importeParaDescuento,
                descuento: action.payload.descuento,
            }

        case types.carritoActualizarImportes:
            return {
                ...state,
                productos: action.payload.productos,
                total: action.payload.total,
                importeDesc: action.payload.importeParaDescuento,
                descuento: action.payload.descuento,
                
            }
        case types.carritoAsignar:
            return {
                ...state,
                userId: action.payload
            }

        case types.carritoDesasignar:
            return {
                ...state,
                userId: ""
            }
        case types.carritoLoad:
            return {...action.payload}

        default:
            return state    
        
    }
}