import React from 'react';
import {Link} from 'react-router-dom'

import './BotonLink.css';

const BotonLink = ({path, search, accionBoton}) => {
    return (
        <Link to={{
            pathname: path,
            search: search
        }} role="button" className="boton-link">{accionBoton}</Link>
    );
}

export default BotonLink;
