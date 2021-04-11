import React from 'react';

import './Input.css'

const Input = ({tipo,nombre,placeholder,handleChange,valor}) => {
    return (
        <div className="input-alone">
                <input       
                    type={tipo}
                    name = {nombre}
                    placeholder = {placeholder}
                    onChange = {handleChange}
                    value = {valor}
                />
            </div>
    );
}

export default Input;
