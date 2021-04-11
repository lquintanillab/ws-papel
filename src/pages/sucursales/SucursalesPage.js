import React from 'react';


import tacuba from '../../assets/tacuba.jpeg';
import calle4 from '../../assets/calle-4.jpeg';
import andrade from '../../assets/dr-andrade.png';
import cinco from '../../assets/5-febrero.jpeg';
import bolivar from '../../assets/bolivar.png'
import banner2 from '../../assets/banner2.jpg';

import BarraPrincipal from '../../components/layout/BarraPrincipal/BarraPrincipal';
import FooterPrincipal from '../../components/layout/FooterPrincipal/FooterPrincipal';
import Banner from '../../components/layout/Banner/Banner';
import ContenedorSeccion from '../../components/layout/ContenedorSeccion/ContenedorSeccion';
import ContenedorItems from '../../components/layout/ContenedorItems/ContenedorItems';
import ContenedorItem from '../../components/layout/ContenedorItems/ContenedorItem';
import BotonLink from '../../components/BotonLink/BotonLink'

import './SucursalesPage.css'

const SucursalesPage = () => {
    return (
        <>
              <BarraPrincipal show={ true } />
                <div className="sucursales-contenedor">
                        <ContenedorSeccion titulo="Sucursales">
                            <Banner  bannerImg={banner2} alt="banner2" />
                        </ContenedorSeccion>                
                    <ContenedorItems>
                        <ContenedorItem
                            imagen={tacuba} 
                            alt="tacuba"
                            nombre="Tacuba" 
                            descripcion="Biólogo Maximino Martínez 3902 Col. San Salvador Xochimanca C.P. 02870 México, D.F. (a la altura de Av. Cuitláhuac 2500) Tel./Fax: 2465 0399 e-mail ventas@papelsa.com.mx"  
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/sucursal/tacuba" accionBoton="   Ver mas...  " />
                        </ContenedorItem>

                        <ContenedorItem
                            imagen={calle4} 
                            alt="calle4"
                            nombre="Calle 4"
                            descripcion="Calle 4 No. 194-A Col. Granjas San Antonio C.P 09070, Ciudad de México 5685-3176 email: calle4@papelsa.com.mx"
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/sucursal/calle4" accionBoton="   Ver mas...  " />
                        </ContenedorItem>
                        <ContenedorItem
                            imagen={andrade} 
                            alt="andrade"
                            nombre="Dr. Andrade"
                            descripcion="Dr. Andrade No.78 y 84 Col. Doctores C.P 06720, Ciudad de México 5578-7400 email: sucandrade@papelsa.com.mx"
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/sucursal/andrade" accionBoton="   Ver mas...  " />
                        </ContenedorItem>
                        <ContenedorItem
                            imagen={bolivar} 
                            alt="bolivar"
                            nombre="Bolivar"
                            descripcion="Bolivar No. 95-D Col. Centro C.P 06080 Alcaldia Cuahutemoc, Ciudad de México 5709-2022 email: bolivar@papelsa.com.mx"
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/sucursal/bolivar" accionBoton="   Ver mas...  " />
                        </ContenedorItem>
                        <ContenedorItem
                            imagen={cinco} 
                            alt="cinco"
                            nombre="Cinco de Febrero"
                            descripcion="5 De Febrero 378 Col. Obrera C.P 06800, Ciudad de México 5740-7777 / 8114-5435 email: cincodefebrero@papelsa.com.mx"
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/sucursal/cincoDeFebrero" accionBoton="   Ver mas...  " />
                        </ContenedorItem>
                        <ContenedorItem
                            imagen={andrade} 
                            alt="andrade"
                            nombre="Vertiz 176"
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/contacto" accionBoton="   Ver mas...  " />
                        </ContenedorItem>
                        <ContenedorItem
                            imagen={tacuba} 
                            alt="tacuba"
                            nombre="Queretaro"
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/contacto" accionBoton="   Ver mas...  " />
                        </ContenedorItem>
                        <ContenedorItem
                            imagen={calle4} 
                            alt="calle4"
                            nombre="Callcenter"
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/contacto" accionBoton="   Ver mas...  " />
                        </ContenedorItem>
                        <ContenedorItem
                            imagen={andrade} 
                            alt="andrade"
                            nombre="Leon"
                        >
                            <div className="divisor"></div>
                            <BotonLink path="/contacto" accionBoton="   Ver mas...  " />
                        </ContenedorItem>
                    </ContenedorItems>
                    
                </div>


              <FooterPrincipal />
            
        </>
    );
}

export default SucursalesPage;
