import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import './LoginPage.css'

const ResetPasswordPage = () => {

    const [formValues, handleInputChange, reset] = useForm({
        email: ''
    })

    const { email }  = formValues; 

    const sendReset = () => {
        reset();
    }

    return (
        <div className="contenedor-login">
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                <h3>Restablecer contraseña</h3>
                <p className="campo-form">Ingresa el correo electrónico que registraste</p>
                    <form>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input 
                                id="email"
                                type="email"
                                name = "email"
                                placeholder = "Email"
                                value= { email }
                                onChange = { handleInputChange }
                            />
                        </div>
                        <div className="campo-form">
                            <input 
                                onClick = {sendReset }
                                type="button" 
                                className="boton-login"
                                value="Enviar"
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

export default ResetPasswordPage;
