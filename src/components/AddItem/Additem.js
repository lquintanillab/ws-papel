import React from 'react';

import './AddItem.css'

const Additem = ({texto, icono, funcion}) => {
    return (
        <div className="add-item" onClick={()=>{funcion()}} >
            <div className="add-item-icono">
                <i className={icono} aria-hidden="true"></i>
            </div>
            <div className="add-item-texto">
                {texto}
            </div>
        </div>
    );
}

export default Additem;
