import React from 'react';
import {Link} from 'react-router-dom'

import './BotonLinkFull.css';

const BotonLinkFull = ({path, search, accionBoton}) => {
    return (
        <Link to={{
            pathname: path,
            search: search
        }} role="button" className="boton-link-full">{accionBoton}</Link>
    );
}

export default BotonLinkFull;
