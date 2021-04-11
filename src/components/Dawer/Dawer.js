import React from 'react';
import './Dawer.css'

const Dawer = () => {
    const closeDawer = (event)=>{
        event.preventDefault();
        let dawer = document.getElementById('dawer');
        let parent = document.getElementById("parent");
        dawer.style.width = "0px";
        parent.style.marginLeft = "0px";
    }
    return ( 
     <div className="dawer" id="dawer">
        <button onClick={closeDawer} className="close-dawer"><i className="fas fa-times icono-cerrar"></i></button> 
        
        <div className="calculadora">
        <app-calculadora >
        </app-calculadora>
        </div>
      
     </div>
    );
}
 
export default Dawer;