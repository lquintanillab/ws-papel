import React, { useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

import './Buscador.css'

const BuscadorDebounce = ({handleBuscadorChange}) => {

    let subscripcion = null;
    const textInput = useRef();

    useEffect(() => {
        
        const tec = fromEvent(textInput.current, 'keydown')
        const result = tec.pipe(debounceTime(1000));
        subscripcion = result.subscribe(x => handleBuscadorChange(x));

        return () => {
           subscripcion.unsubscribe();
        };
    }, []);


    return (       
        <div className="buscador">
            <input type="text" className="input-buscador" ref={textInput} placeholder="Buscar un Papel"/>
            <i className="fa fa-search" ></i>
        </div>
    );
}

export default BuscadorDebounce;