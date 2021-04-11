import { types } from '../types/types';

export const  loadDescuentos = (descuentos) =>{
    return {
        type: types.loadDescuentos,
        payload: descuentos
    }
}