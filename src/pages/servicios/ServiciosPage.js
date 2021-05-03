import React from 'react';

import bannerServicios  from '../../assets/banner_servicios.jpeg'
import servicios  from '../../assets/servicios.jpeg'

import './Servicios.css'

const ServiciosPage = () => {
    return (
        <div className="servicios-container">
          <header className="header-servicios">
            <img className="banner-servicios-header"  src={servicios} alt = "bannerServiciosHeader"/>
          </header>
         <div className="body-servicios">
             <section className="section-servicios">
                <article className="article-servicios">
                    <header className="header-article-servicios" >
                        Servicios
                    </header>
                   
                    <ul className="list-article-servicios">
                        <li className="item-servicios">Almacenes con grandes existencia para satisfacer sus necesidades</li>
                        <li className="item-servicios">Servicio express en todas nuestras sucursales</li>
                        <li className="item-servicios">Corte en guillotina y empaque del papel cortado</li>
                        <li className="item-servicios">Entrega a domicilio en el área metropolitana de la Ciudad de México, generalmente en un promedio de 4 horas hábiles</li>
                        <li className="item-servicios">Equipo de transporte equipado con radio para mejor control de la entrega de su mercancía</li>
                        <li className="item-servicios">Entrega a domicilio en algunas poblaciones fuera de la Ciudad de México</li>
                        <li className="item-servicios">Embarque de mercancía a todo el país por su línea de carga preferida</li>
                        <li className="item-servicios">Sucursales comunicadas en red que nos permite conocer nuestro inventario total en cualquier momento</li>
                        <li className="item-servicios">Calculadora para corte de papel (Ver Calculadora de Corte)</li>
                        <li className="item-servicios">Asesoría técnica</li>
                        <li className="item-servicios">Muestrarios de productos seleccionados</li>
                        <li className="item-servicios">Artículos en Promoción (Favor de revisar existencias y precios de estos productos en nuestra Lista de Precios) (Ver Lista de Precios)</li>
                    </ul>
                    
                </article>
                <article className="article-mas">
                    <header className="header-article-mas">
                        También contamos con...
                    </header>
                    <p className="paragraph-mas">En cada una de nuestras sucursales contamos con la infraestructura necesaria para proporcionarle el mejor servicio:</p>
                    <ul className="list-article-mas">
                        <li className="item-mas">Personal capacitado</li>
                        <li className="item-mas">Facturación automatizada</li>
                        <li className="item-mas">Mostradores con servicio inmediato</li>
                        <li className="item-mas">Almacenes</li>
                        <li className="item-mas">Guillotinas</li>
                        <li className="item-mas">Sistemas y equipo de computo constantemente actualizados</li>     
                    </ul>
                    <p className="paragraph-mas">Además de líneas telefónicas, estacionamiento para clientes y el más rápido servicio de entrega a domicilio, con equipo de transporte comunicado por radio con la central.</p>
                </article>
             </section>
             <aside className = "aside-servicios">
                <img className="banner-servicios-aside"  src={bannerServicios} alt = "bannerServiciosAside"/>
             </aside>
         </div>
        </div>
    );
}

export default ServiciosPage;
