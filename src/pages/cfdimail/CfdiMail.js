import React, {useEffect}  from 'react';
import {Link} from 'react-router-dom'

import './CfdiMail.css'

const CfdiMail = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.mailjet.com/statics/js/iframeResizer.min.js";
        script.async = true;

        document.body.appendChild(script);
      
    }, []);
    return (
        <div className="cfdiMail-container"> 
            <div className ="mail-container">
                <iframe title="mail" className="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/2VLz/Ja3" width="100%" height="100%"></iframe> 
            </div>
            <Link to="/catalogo" className="link-sucursales">
                {"Ir a Productos ..."}
            </Link>
        </div>
    );
}

export default CfdiMail;
