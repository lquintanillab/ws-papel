import React from 'react';

import './ContenedorItemTexto.css'
const ContenedorItemTexto = ({ nombre, descripcion, children}) => {
    return (
        <div className = "contenedor-item-texto" >
            <p className="nombre-item-texto">{nombre}</p>
            <p className="item-texto">
                {descripcion}
            </p>
            {children}
        </div>
    );
}

export default ContenedorItemTexto;
