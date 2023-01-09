import { firebase, googleAuthprovider, db} from '../config/firebaseConfig'
import { types } from '../types/types';
import { endLoading, setError, startLoading } from './ui';
import Swal from 'sweetalert2';
import { removeProfile } from './profile';
import { desAsignarCarrito} from './carrito';


export const startLoginEmailPassword = (email, password)=>{

    return (dispatch) =>{
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async ({user}) =>{
            dispatch(login(user.uid, user.displayName));
           // dispatch(startLoadingProfile(user.uid))
            dispatch(endLoading());
        }).catch(error => {
            dispatch(endLoading());
            Swal.fire('Error',error.message, 'error');
        })

    }  
}

export const startLogout = () =>{
    return (dispatch) => {
        dispatch(startLoading())
        firebase.auth().signOut().then(
            (res)=>{
           
                dispatch(logout());
                dispatch(removeProfile());
                dispatch(desAsignarCarrito());
                //dispatch(vaciarCarrito());
                dispatch(endLoading());  
            }
        ).catch(error =>{
            dispatch(endLoading());
        })

    }
}

export const startRegisterEmailPassword = (nombre, rfc, email,password) =>{
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async ({user}) => {
            await user.updateProfile({displayName:nombre});
            const configuracion = {url: "http://papelsa.com.mx/papelReact/login"};
            await user.sendEmailVerification(configuracion);   
            await db.collection('users').doc(user.uid).set({nombre,rfc,email, uid: user.uid });
            dispatch(login(user.uid, user.displayName));
        }).catch(error => {
            dispatch(setError(error));
            Swal.fire('Error',error.message, 'error');
        })
    }
}

export const startGoogleLogin = () => {
   
    return (dispatch) =>{
        
        firebase.auth().signInWithPopup(googleAuthprovider)
        .then( userCred => {
           
        }).catch(error => {
            
        })
    }
}

export const login = (uid, displayName) =>({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const logout = () =>({ type: types.logout} )