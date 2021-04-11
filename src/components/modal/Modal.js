import React from 'react';

import './Modal.css'
const Modal = (props) => {

    const closeModal = (e) =>{
            e.preventDefault();
           props.setMostrar(false)
    }
    return (
    <div className={`modale ${props.mostrar ? 'opened' : ''}` }  aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-header">
                <p>{props.headerText}</p>
            <button onClick={closeModal} className="btn-close"><i className="fas fa-times icono-cerrar"></i></button> 
        
            </div>
            <div className="modal-body">

                {props.children}

            </div>
            <div className="modal-footer">

            </div>
        </div>
    </div>

    );
}

export default Modal;
