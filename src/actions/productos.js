import { types } from '../types/types';


export const  loadProductos = (productos) =>{
    return {
        type: types.loadProductos,
        payload: productos
    }
}