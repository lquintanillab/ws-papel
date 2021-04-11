import React  from 'react';

import BarraPrincipal from '../../components/layout/BarraPrincipal/BarraPrincipal';
// import Hero from '../../components/layout/Hero/Hero';
import HeroCarousel from '../../components/layout/HeroCarousel/HeroCarousel';

import './HomePage.css'

import icono1 from '../../assets/icono1.svg'
import icono2 from '../../assets/icono2.svg'
import icono3 from '../../assets/icono3.svg'
import banner1 from '../../assets/banner1.jpg'
import banner3 from '../../assets/banner3.jpg'
import impresion from '../../assets/impresion.png'
import empaque from '../../assets/empaque.jpeg'
import adhesivo from '../../assets/adhesivo3.png'
import FooterPrincipal from '../../components/layout/FooterPrincipal/FooterPrincipal';
import Banner from '../../components/layout/Banner/Banner';
import ContenedorSeccion from '../../components/layout/ContenedorSeccion/ContenedorSeccion';
import ContenedorItems from '../../components/layout/ContenedorItems/ContenedorItems';
import ContenedorItem from '../../components/layout/ContenedorItems/ContenedorItem';

const HomePage = () => {

  

    return (
        <div className="homePage">
             <BarraPrincipal show={ false } />
               <HeroCarousel/>  
            {/* <Hero />  */}

        <ContenedorSeccion 
            titulo="Mas Sobre  Nosotros" 
            descripcion = "En Papel s.a., te ofrecemos los papeles más utilizados en las Artes Gráficas, Escritura e Impresión" 
        >
            <div className="iconos-nosotros">
                <div className="icono">
                    <img src={icono1} alt="icono seguridad"/>
                    <h3 className="encabezado">Seguridad</h3>
                    <p className = "descripcion-icono">
                        Seguridad, confianza y experiencia.
                    </p>
                </div>
                <div className="icono">
                    <img src={icono2} alt="icono mejor precio"/>
                    <h3 className="encabezado mayusculas">El mejor precio </h3>
                    <p className = "descripcion-icono">
                        La mejor calidad con excelentes precios.
                    </p>
                </div>
                <div className="icono">
                    <img src={icono3} alt="icono a tiempo"/>
                    <h3 className="encabezado"> A tiempo</h3>
                    <p className = "descripcion-icono">
                        Servicio express en mostrador y a domicilio.
                    </p>
                </div> 
            </div>
        </ContenedorSeccion>
        <ContenedorSeccion
            descripcion="Papel s.a., es el distribuidor li­der en México de papel Couché, sulfatada SBS, Caple, autoadhesivos, bond, papel sintético Polypap, bristol opalina, material de empaque,etc.
            Los papeles, cartulinas y cartones más usados en artes gráficas. "
        />
 
        <Banner bannerImg={banner1} alt="banner1" />
        <ContenedorSeccion
            titulo="Productos"
            descripcion="Papel s.a.,  tiene los papeles, cartulinas y cartones más usados en artes gráficas. "
        >
        </ContenedorSeccion>
        <ContenedorItems>
                <ContenedorItem imagen= {impresion} alt="impresion" nombre="Impresion" >
                </ContenedorItem>
                <ContenedorItem imagen= {empaque} alt="empaque" nombre="Empaque" >
                </ContenedorItem>
                <ContenedorItem imagen= {adhesivo} alt="adhesivo" nombre="Adhesivo">
                </ContenedorItem>
        </ContenedorItems>

        <Banner bannerImg={banner3} alt="banner3"/>
       
        <FooterPrincipal />
        </div>
    );
}

export default HomePage;
