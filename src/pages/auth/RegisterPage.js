import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';


import { useForm } from '../../hooks/useForm';

import 'react-toastify/dist/ReactToastify.css';

import './LoginPage.css'
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';

import {supabase} from '../../config/supabaseconfig';


const configToast = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
    hideProgressBar: true,
  }

const RegisterPage = () => {

    const dispatch = useDispatch()
    const uiState = useSelector(state => state.ui)
    const{msgError} = uiState

    useEffect(() => {
       toast.error(msgError,configToast)
       dispatch(setError(null));
    }, [msgError]);
    
    

    const [valueForms, handleInputChange] = useForm({
        nombre: '',
        rfc: '',
        email: '',
        password: ''
    })

    const { nombre, rfc, email, password } = valueForms;

    const handleRegister = (e) => {
        e.preventDefault();
        //reset()
        // dispatch(startRegisterEmailPassword(nombre,rfc,email,password))
        
        if(isFormValid()){
            //dispatch(startRegisterEmailPassword(nombre,rfc,email,password))
            signup_supabase(email, password)
        }
    
    }

    const isFormValid = () => {

        if(nombre.trim().length === 0  ){
            dispatch(setError('El nombre es requerido'));
            return false;
        }else if(rfc.length <13 || rfc.length > 14){
            dispatch(setError('El RFC debe ser de 13 o 14 caracteres'));
            return false;   
        }else if(!validator.isEmail(email)){
           
            dispatch(setError('El email no tiene formato'));
            return false;
        }else if(password.length <=4 ){
           
            dispatch(setError('El password debe contener mas de 4 digitos'));
            return false;
        }
        else{
            dispatch(removeError());
            return true;
        }

    }

 
    const signup_supabase = async(email, password) =>{
        console.log('Creando el usuario en supabase')
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
          })
          console.log(data)
    }

    return (
        <div className="contenedor-login">
             <ToastContainer/>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h3>Obtener una cuenta</h3>
                    <form onSubmit={ handleRegister } noValidate>
                    <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                id="nombre"
                                type="text"
                                name = "nombre"
                                placeholder = "Nombre / Razon Social"
                                value= { nombre }
                                onChange = {handleInputChange}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="rfc">RFC</label>
                            <input 
                                id="rfc"
                                type="text"
                                name = "rfc"
                                placeholder = "RFC"
                                value = { rfc }
                                onChange = {handleInputChange}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input 
                                id="email"
                                type="email"
                                name = "email"
                                placeholder = "Tu Email"
                                value= { email }
                                onChange = {handleInputChange}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input 
                                id="password"
                                type="password"
                                name = "password"
                                placeholder = "Tu Password"
                                value= { password }
                                onChange = {handleInputChange}
                            />
                        </div>
                        <div className="campo-form">
                            Al crear una cuenta, aceptas el Aviso de Privacidad, los Términos y Condiciones, así como el envío de noticias y promociones exclusivas. Puedes desactivar el envío de promociones desde el enlace incluido en cada correo.
                        </div>
                        <div className="campo-form">
                            <input 
                            type="submit" 
                            className="boton-login"
                            value="Crear cuenta"
                            />
                        </div>
                    </form>
                    <Link to="/login" className="enlace-cuenta">
                        Volver Iniciar Sesion
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
