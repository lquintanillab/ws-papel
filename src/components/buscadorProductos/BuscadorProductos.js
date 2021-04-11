import React from 'react';


import './BuscadorProductos.css'

const BuscadorProductos = () => {
    return (
        <div className = "buscador-productos">
            <label >
                Uso:
                <input type="search" className="input-buscador-productos" placeholder="Impresión"/>
            </label>
            <label>
                Medida:
                <input type="search" className="input-buscador-productos" placeholder="27X57"/>
            </label>
            <label>
                Color:
                <input type="search" className="input-buscador-productos" placeholder="Azul"/>
            </label>
        </div>
    );
}

export default BuscadorProductos;
