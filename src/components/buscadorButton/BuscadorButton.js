import React from 'react';
import {Link} from 'react-router-dom'

import './BuscadorButton.css'

const BuscadorButton = () => {

    return (
        <Link to={{
            pathname: '/buscador3',
        }} role="button" className="boton-redirect-buscador"
        >
            Buscar un Producto <span><i className="fa fa-search"></i></span>
        </Link>
    );
}

export default BuscadorButton;
