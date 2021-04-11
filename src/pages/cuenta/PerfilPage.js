import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import { useSelector } from 'react-redux'


import './PerfilPage.css'

const PerfilPage = () => {

    const {nombre,email,rfc} = useSelector(state => state.profile)


    return (
        <div className="perfil-contenedor">
            <div >
                
                <div className="card-profile">
                    <div className="header-card-profile">
                        <h3>Mi información</h3>
                    </div>
                    <div className="body-card-profile">
                        <p>Nombre:    {nombre} </p>
                        <p>RFC:    {rfc} </p>
                        <p>Correo Electrónico:    {email} </p>
                        <p>Telefono:</p>

                    </div>
                    <div className="footer-card-profile">
                        <div className="tooltip">
                            <i className="fas fa-edit" ></i>
                            <span className="tooltiptext">Editar</span>
                        </div>
                        <div className="tooltip">
                            <i className="fas fa-key tooltip"></i>
                            <span className="tooltiptext">Cambiar </span>
                        </div>
                      
                    </div>
                </div>
            </div>
            <BackButton />
        </div>
    );
}

export default PerfilPage;
