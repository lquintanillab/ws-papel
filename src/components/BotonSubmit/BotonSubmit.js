import React from 'react';

import './BotonSubmit.css';

const BotonSubmit = ({value}) => {
    return (
        <div className="campo-form">
            <input 
            type="submit" 
            className="boton-submit"
            value={value}
            />
        </div>
    );
}

export default BotonSubmit;
