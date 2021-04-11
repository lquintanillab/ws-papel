import React from 'react';
import RegistroCfdi from '../../RegistroCfdi/RegistroCfdi';

import './FooterPrincipal.css';




const FooterPrincipal = () => {
    return (  
     <footer className="footer-principal" id='footer'  >
         <div className="footer-content">
            <hr className="divider" />
            <div className="footer-segmentos">
                <div className="segmento">
                    <p>
                        Aviso de Privacidad
                    </p>
                    <p>
                        © Papel SA de CV 2020. Todos los derechos reservados.
                    </p>
                    <p>
                        Powered By ASIST.
                    </p>
                    
                </div>
                <div className="segmento">
                    <p>Registro Envío Cfdi</p>
                    <RegistroCfdi />
                </div>
                <div className="segmento">
                    <div>
                        <p>Siguenos en:</p>
                        <a href="https://www.facebook.com/papelsamx" target="_blank" rel="noopener noreferrer" className="facebook"> </a>
                        <a href="https://twitter.com/papelsamx" target="_blank" rel="noopener noreferrer" className="twitter"> </a>
                    </div>
                </div>
                <div className="segmento">
                    <p>Oficinas Generales</p>
                    <p>
                        Biólogo Maximino Martínez No. 3902 (continuación de eje 2 Norte) Col. San Salvador Xochimanca
                        C.P. 02870 México D.F. (A la altura de Av. Cuitlahuac No. 2500)
                    </p>
                    <p>
                        Tel. 53 42 71 66   Fax 24 65 03 88
                    </p>
                    <p>
                        e-mail ventas@papelsa.com
                    </p>
                </div>
            </div>
            <hr className="divider" />
         </div>
        
     </footer>
    );
}
 
export default FooterPrincipal;
