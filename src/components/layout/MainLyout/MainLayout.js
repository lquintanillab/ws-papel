import React from 'react';
import BarraPrincipal from '../BarraPrincipal/BarraPrincipal';
import FooterPrincipal from '../FooterPrincipal/FooterPrincipal';

import './MainLayout.css'

const MainLayout = (props) => {
    return (
        <>
           <BarraPrincipal show="true" /> 
           <div className="contenedor-main-layout">
               {props.children}
           </div>
           <FooterPrincipal />
        </>
    );
}

export default MainLayout;
