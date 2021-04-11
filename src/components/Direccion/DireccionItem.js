import React from 'react';

import './DireccionItem.css';

const DireccionItem = ({direccion,index,func, funcDelete}) => {



   /*  const handeClick = ()=>{
       
    } */

    return (
        <div className="direccion-item">
            <div className="direccion-item-header">
                {direccion.alias }
            </div>
            <div className="direccion-item-body">
                <div className="recibe">
                    {direccion.recibe}
                </div>
                <div className="calle">
                    {`${direccion.calle}`}
                </div>
                <div className="colonia">
                    {`${direccion.colonia}`}
                </div>
                <div className="colonia">
                    {`${direccion.ciudad}, ${direccion.estado} ${direccion.cp}  `}
                </div>
                <div className="colonia">
                    {`${direccion.pais}`}
                </div>
                <div className="colonia">
                   Numero de Telefono: {`${direccion.telefono}`}
                </div>
            </div>
            <div className="direccion-item-footer">
                <i className="fas fa-edit" onClick={()=>{func(index)}}></i>
                <i className="fas fa-trash-alt" onClick={()=> {funcDelete(index)}}></i>
            </div>
        </div>
    );
}

export default DireccionItem;
