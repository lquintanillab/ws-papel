import {db} from '../config/firebaseConfig'
import { types } from '../types/types';
import {asignarCarrito} from './carrito'

let unsubscribe = null;

export const startLoadingProfile = (uid) => {
    return  (dispatch) =>{
        unsubscribe = db.collection('users').doc(uid).onSnapshot(
            doc => {
                dispatch(loadingProfile(doc.data()));
                dispatch(asignarCarrito(uid))
                
            }
        );
        
    }
}

export const startAddDireccion = (uid,direcciones) => {
   return (dispatch)=>{
         db.collection('users').doc(uid).update({direcciones}).then(data => {
            
        }) 
       
   }
}

export const startUpdateDirecciones = (uid, direcciones) =>{
    return (dispatch)=>{
       
        db.collection('users').doc(uid).update({direcciones:direcciones}).then(data => {
           
       }) 
      
  }
}



export const loadingProfile = (profile) => { 
    return {
        type: types.loadProfile,
        payload: profile
    }
}

export const removeProfile = () =>{
    unsubscribe()
    return { type: types.removeProfile} 
}
    
    