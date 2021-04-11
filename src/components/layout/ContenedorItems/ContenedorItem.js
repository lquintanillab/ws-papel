import React from 'react';

import './ContenedorItem.css'

const ContenedorItem = ({imagen, alt, nombre, descripcion, children}) => {
    return (
        <div className = "contenedor-item" >
            <img className= "imagen-item" src={imagen} alt={alt}/>
            <p className="nombre-item">{nombre}</p>
            {
                descripcion 
                ? 
                <div className= "descripcion-item">{descripcion}</div>
                :
                null
            }
            {children}
        </div>
    );
}

export default ContenedorItem;
