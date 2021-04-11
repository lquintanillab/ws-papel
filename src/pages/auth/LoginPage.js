import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {Link} from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import BarraPrincipal from '../../components/layout/BarraPrincipal/BarraPrincipal';
import FooterPrincipal from '../../components/layout/FooterPrincipal/FooterPrincipal';
import { useForm } from '../../hooks/useForm';


import './LoginPage.css'

const LoginPage = () => {

    const dispatch = useDispatch();
    const uiState = useSelector(state => state.ui)
    const{loading} = uiState

   const [formValues, handleInputChange] = useForm({
       /* email: 'lquintanillab@gmail.com',
       password: '123456' */
       email: '',
       password: ''
   })

    const {email, password} = formValues;

    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
       //dispatch(startGoogleLogin())
    }
   
    return (
        <>   
            <BarraPrincipal show={true} />
            
            <div className="contenedor-login">
                <div className="form-usuario">
                    <div className="contenedor-form sombra-dark">
                        <h3>Iniciar Sesión</h3>
                        <form onSubmit = {onSubmit}>
                            <div className="campo-form">
                                <label htmlFor="email">Email</label>
                                <input 
                                    id="email"
                                    type="email"
                                    name = "email"
                                    placeholder = "Tu Email"
                                    onChange = {handleInputChange}
                                    value= {email}
                                />
                            </div>
                            <div className="campo-form">
                                <label htmlFor="password">Password</label>
                                <input 
                                    id="password"
                                    type="password"
                                    name = "password"
                                    placeholder = "Tu Password"
                                    onChange = {handleInputChange}
                                    value = {password}
                                />
                            </div>
                            <div className={`sk-chase ${ !loading ?  "hide" : ''  } `}>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                            </div>
                            <div className="campo-form">
                                <input 
                                type="submit" 
                                className="boton-login"
                                value="Iniciar Sesion"
                                disabled={loading}
                                />
                            </div>
                        </form>
                
                        <Link to="/reset-password" className="enlace-cuenta">
                            ¿Olvidaste tu contraseña?
                        </Link>
                        <Link to="/register" className="enlace-cuenta">
                            ¿Aun no tienes cuenta?   Obtener Cuenta
                        </Link>   
                    </div>
                </div>
            </div>
            <FooterPrincipal />
            
        </>
    );
}

export default LoginPage;
