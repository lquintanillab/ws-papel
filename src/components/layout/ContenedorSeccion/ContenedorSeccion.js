import React from 'react';

import './ContenedorSeccion.css'

const ContenedorSeccion = ({titulo, descripcion, children}) => {
    return (
        <section className="contenedor seccion">
            <h2 className="titulo-seccion">{titulo}</h2>
            <p className = "descripcion-seccion">
                {descripcion} 
            </p>
            { children }
        </section>
    );
}

export default ContenedorSeccion;
