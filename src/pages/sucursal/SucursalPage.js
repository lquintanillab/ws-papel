import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
 

import BarraPrincipal from '../../components/layout/BarraPrincipal/BarraPrincipal';

import FooterPrincipal from '../../components/layout/FooterPrincipal/FooterPrincipal';

import {sucursales} from '../../helpers/utils'

import './SucursalPage.css'
import MapView from '../../components/MapView/MapView';


const SucursalPage = (props) => {

    const {id} =  useParams()

    const sucursal = sucursales[id]

    if(!sucursal){
        return <Redirect to="/" />
    }

    
    return (
        <div>
             <BarraPrincipal show={ true } />
                
                <div className="contenedor-sucursal">
                    
                    <div className="sucursal-column1">
                        <h3>{sucursal.nombre}</h3>
                        <img src={sucursal.imagen} alt= {sucursal.nombre} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, optio! Consequuntur nulla molestiae reprehenderit ea? Deleniti impedit expedita, ipsa exercitationem, ipsam nostrum officia cupiditate nobis aliquam dignissimos ut blanditiis magni.</p>
                        <div className="divisor"></div>
                      
                    </div>
                    <div className="sucursal-column2">
                        <MapView lat ={sucursal.latitud} lng= {sucursal.longitud}/>
                    </div>
                </div>
            <FooterPrincipal /> 
           {/*  <MapView lat ={sucursal.latitud} lng= {sucursal.longitud}/> */}
        </div>
    );
}

export default SucursalPage;
