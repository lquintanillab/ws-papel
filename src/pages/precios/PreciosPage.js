import React from 'react';



import './Precios.css'

import Pdf from '../../assets/precios/lista_contado.pdf';




const PreciosPage = () => {
    return (
        <div className="contenedor-precios">
            <div className="contenedor-columns">
                <div className="contenedor-column contenedor-column1">
                    <div className="button-red">
                        <a href={Pdf} without="true" rel="noopener noreferrer" target="_blank">
                            <button >
                            Descargar Lista De Precios
                            </button>
                        </a>
                    </div>
                </div>
                <div className="contenedor-column contenedor-column2">
                <div className="button-red">
                        <a href={Pdf} without="true" rel="noopener noreferrer" target="_blank">
                            <button>
                            Descargar Lista De Precios
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreciosPage;

 