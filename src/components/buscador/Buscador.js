import React from 'react';

import './Buscador.css'

const Buscador = ({handleBuscadorChange}) => {
    return (
        
    <div className="buscador">
        <input type="search" className="input-buscador" placeholder="Buscar un Papel" onChange={handleBuscadorChange}/>
        <i className="fa fa-search" ></i>
    </div>
    );
}

export default Buscador;