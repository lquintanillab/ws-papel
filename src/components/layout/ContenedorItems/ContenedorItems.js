import React from 'react';

import './ContenedorItems.css'

const ContenedorItems = ({children}) => {
    return (
       
            <div className="contenedor-items">
                {children}
            </div>
       
        
    );
}

export default ContenedorItems;
