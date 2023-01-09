import React from 'react';



import working from '../../assets/working.png'

import './ProductosEmpty.css'

const ProductosEmpty = () => {
    return (
        <div>
            <h1 className="page-title">A la Venta proximamente !!!</h1>
            <img className= "imagen-working" src={working} alt="Imagen trabajando"/>
        </div>
    );
}

export default ProductosEmpty;
