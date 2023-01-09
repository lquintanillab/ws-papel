import {db} from '../config/firebaseConfig'
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { endLoading } from './ui';

export const startAgregarProducto = (producto,total,importeParaDescuento,descuento) =>{
    //console.log("Agregando el producto");
    return  (dispatch) =>{  
       dispatch(agregarProducto(producto,total,importeParaDescuento,descuento));
    }
}

export const startQuitarProducto = (productos,total,importeParaDescuento,descuento) =>{
    return  (dispatch) =>{  
                dispatch(quitarProducto(productos,total,importeParaDescuento,descuento));
    }
}

export const startVaciarCarrito = (carrito) =>{
    return  (dispatch) =>{  
                
                db.collection('carritos').doc(carrito.userId).set(
                    {
                        userId: carrito.userId,
                        productos: [],
                        total: 0.00,
                        importeDesc: 0.00,
                        descuento: 0.00,
                        dateCreated:'',
                        lastUpdated:'',
                        pendiente: true
                    
                    }
                ).then(data => {
                    dispatch(vaciarCarrito());
                }).catch(error => {
                    dispatch(endLoading());
                    Swal.fire('Error',error.message, 'error');
                }) 
    }
}

export const iniciarVaciarCarrito = (id) =>{
    return  (dispatch) =>{  
                
                db.collection('carritos').doc(id).set(
                    {
                        userId: id,
                        productos: [],
                        total: 0.00,
                        importeDesc: 0.00,
                        descuento: 0.00,
                        dateCreated:'',
                        lastUpdated:'',
                        pendiente: true
                    
                    }
                ).then(data => {
                    dispatch(vaciarCarrito());
                }).catch(error => {
                    dispatch(endLoading());
                    Swal.fire('Error',error.message, 'error');
                }) 
    }
}

/* export const startActualizarImportes = (productos,total) =>{
    return  (dispatch) =>{  
                dispatch(actualizarImportes(productos,total));
    }
}
 */

export const agregarProducto = (producto,total,importeParaDescuento,descuento) => {
    return {
        type: types.carritoAddProduct,
        payload: {producto,total,importeParaDescuento,descuento}
    }
}

export const vaciarCarrito= () =>{
   return {
        type: types.carritoVaciar
    }
}
export const quitarProducto= (productos,total,importeParaDescuento,descuento) =>{
    return {
         type: types.carritoRemoveProduct,
         payload: {productos,total,importeParaDescuento,descuento}
     }
 }

 export const actualizarImportes = (productos,total,importeParaDescuento,descuento)=>{
    return {
        type: types.carritoActualizarImportes,
        payload: {productos,total,importeParaDescuento,descuento}
    }
 }

 export const asignarCarrito = (uid) =>{
    return {
        type: types.carritoAsignar,
        payload: uid
    }
 }

 export const desAsignarCarrito = (uid) =>{
    return {
        type: types.carritoDesasignar,
        payload: uid
    }
 }

 export const startGuardarCarrito = (carrito) => {
     return (dispatch) =>{
        db.collection('carritos').doc(carrito.userId).set(carrito).then(data => {
           
        }).catch(error => {
            dispatch(endLoading());
            Swal.fire('Error',error.message, 'error');
        }) 
     }
 }

 export const startLoadCarrito = (uid) =>{

    return (dispatch) =>{
        db.collection('carritos').doc(uid).get().then(doc =>{
            if (doc.exists) {
                //console.log("Document data:", doc.data());
                dispatch(loadCarrito(doc.data()))
            } else {
                // doc.data() will be undefined in this case
                //console.log("No such document!");
            }
        })
    }

 }

 export const loadCarrito = (carritoFb) =>{
        return {
            type: types.carritoLoad,
            payload: carritoFb
        }
 }
