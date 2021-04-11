import React from 'react';
import { useSelector } from 'react-redux'; 

import './SelectorDirecciones.css'

const SelectorDirecciones = ({onChangeDirecciones}) => {
    const profileState = useSelector(state => state.profile);
    return (
        <select className="selector-direcciones" onChange = {onChangeDirecciones} >
            <option value="">--Seleccione una direccion --</option>
            {profileState.direcciones?.length >0 ? profileState.direcciones.map(direccion => <option key={direccion.alias} value={JSON.stringify(direccion)}>{direccion.alias}</option>): null }
        </select>
    );
}

export default SelectorDirecciones;
