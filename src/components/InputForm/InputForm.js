import React from 'react';

import './InputForm.css';

const InputForm = ({tipo, nombre, placeholder, handleChange, valor}) => {
    return (
            <div className="campo-form">
                <label htmlFor={nombre}>{placeholder}</label>
                <input 
                    id={nombre}
                    type={tipo}
                    name = {nombre}
                    placeholder = {placeholder}
                    onChange = {handleChange}
                    value = {valor}
                />
            </div>
     
    );
}

export default InputForm;
