import React from 'react';
import {Link} from 'react-router-dom'

import './ProductoPage.css'

const ProductoPage= (props) => {
  
    return (  
    <div className = "contenedor-producto" >
        <img className= "imagen-producto" src={props.producto.imagen} alt={props.producto.nombre}/>
        <p className="nombre-producto">{props.producto.nombre}</p>
        <div className= "descripcion-producto">
           {props.producto.descripcion}
        </div>
       <hr className= "divisor"/>
       <Link to={props.path} role="button" className="boton-ver-producto">{props.accionBoton}</Link>
    </div>
    );
}
 
export default ProductoPage;