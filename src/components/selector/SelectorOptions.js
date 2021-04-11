import React from 'react';

import './SelectorOptions.css'

const SelectorOptions = ({onChangeSelector, opciones, tipo, selected }) => {
    return (
        <select className="selector-options" onChange = {onChangeSelector} name={tipo} id={tipo} value={selected}>
            <option value="">-- Seleccione {tipo} --</option>
            {opciones.map(opcion => opcion!== '' ? <option key={opcion} value={opcion}>{opcion}</option> : null)}
        </select>
    );
}

export default SelectorOptions;
