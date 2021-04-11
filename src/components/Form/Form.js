import React from 'react';

import './Form.css';
const Form = ({handleSubmit, encabezado, children}) => {
    return (
    
            <div className="contenedor-form sombra-dark">
                    <h4>{encabezado}</h4>
                    <form onSubmit = {handleSubmit}>
                    {children}
                </form>
            </div>
        
        
    );
}

export default Form;
