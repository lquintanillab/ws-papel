import React from 'react';
import ContenedorItems from '../../components/layout/ContenedorItems/ContenedorItems'
import ContenedorSeccion from '../../components/layout/ContenedorSeccion/ContenedorSeccion'
import CardMaterialIcon from '../../components/Card/CardMaterialIcon';
import { useHistory } from "react-router-dom";


const CuentaPage = () => {
 
    let history = useHistory();

    const miFuncion = (path)=>{
        history.push(`/${path}`);
    }

    return (
        <>
            <ContenedorSeccion titulo="Mi cuenta">
                <ContenedorItems >
                    <CardMaterialIcon
                         titulo="Perfil" 
                        descripcion ="Editar mi perfil" 
                        icono="far fa-address-card"
                        funcion = {()=>{
                            miFuncion("mi-perfil")
                        }}
                    />
                    <CardMaterialIcon 
                        titulo="Pedidos" 
                        descripcion="Ver mis ultimos pedidos" 
                        icono = "fas fa-shopping-cart" 
                        funcion = {()=>{
                            miFuncion("mis-pedidos")
                        }}
                    />
                    <CardMaterialIcon 
                        titulo="Direcciones" 
                        descripcion ="Editar mis direcciones" 
                        icono ="fas fa-map-marker-alt"
                        funcion = {()=>{
                            miFuncion("mis-direcciones")
                        }}    
                    />
                    <CardMaterialIcon 
                        titulo="Mi Pedido" 
                        descripcion = "Rastrear mi pedido actual" 
                        icono = "fas fa-shipping-fast" 
                        funcion = {()=>{
                            miFuncion("mi-pedido")
                        }}
                    />
                </ContenedorItems >
                
            </ContenedorSeccion>
            
           
        </>
    );
}

export default CuentaPage;
