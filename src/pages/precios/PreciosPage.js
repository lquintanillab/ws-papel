import React from 'react';
import bannerServicios from '../../assets/banner_servicios.jpeg'
import bannerContacto from '../../assets/banner_contacto.jpeg'


import './Precios.css'


import Pdf from '../../assets/precios/lista_contado.pdf';




const PreciosPage = () => {
    return (
        <div className="contenedor-precios">
            <img className="banner-contacto"  src={bannerServicios} alt = "bannerServicios"/>
            <div className="button-lista">
                <p className="vigencia">PRECIOS DE CONTADO con vigencia a partir del12-04-2021.</p>
                <a className="link-lista"  href={Pdf} without="true" rel="noopener noreferrer" target="_blank">
                    Descargar Lista De Precios  
                </a>
                
            </div>
            <img className="banner-contacto" src={bannerContacto} alt = "bannerContacto"/>
        </div>
       
       
    );
}

export default PreciosPage;

 