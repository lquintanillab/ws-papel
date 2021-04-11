import React from 'react';
import FooterPrincipal from '../../components/layout/FooterPrincipal/FooterPrincipal';
import BarraPrincipal from '../../components/layout/BarraPrincipal/BarraPrincipal';
import Banner from '../../components/layout/Banner/Banner';
import ContenedorSeccion from '../../components/layout/ContenedorSeccion/ContenedorSeccion';
import BotonLinkFull from '../../components/BotonLink/BotonLinkFull'



import './NosotrosPage.css';

import banner2 from '../../assets/banner2.jpg'
import almacen from '../../assets/almacen.jpg'



const NosotrosPage = () => {

    return (
        <>
            <BarraPrincipal show={ true } />

            <div className="banner-contenedor" >
                <ContenedorSeccion titulo="Acerca de Nosotros">
                    <Banner  bannerImg={banner2} alt="banner2" />
                </ContenedorSeccion>
            </div>
            <div className="contenedor-nosotros">
                
                <div className="historia seccion-columna">
                    <p className="texto-nosotros">
                        Papel, S.A. de C.V., fundada en 1945, es la empresa líder en el mercado que distribuye los papeles, cartones y cartulinas de mayor consumo entre los exigentes impresores mexicanos.
                    </p>
                    <p className="texto-nosotros">
                        En Papel, S.A. vendemos papeles, cartulinas y cartones para impresión, al igual que sobres de diversas medidas, así como cajas y materiales para empaque.
                    </p>
                    <p className="texto-nosotros">
                        En Papel, S.A., siempre estamos en búsqueda de las mejores opciones; tenemos una organización profesional, para la atención al cliente mediante un conocimiento de siete décadas, del mercado mexicano de papel para las Artes Gráficas.
                    </p>
                    <p className="texto-nosotros">
                         En Papel, S.A., la tecnología de vanguardia va en paralelo con el desarrollo permanente de nuestros recursos humanos y materiales, para ofrecerle un concepto integral de productos y servicios con valor agregado.
                        En cada una de nuestras sucursales contamos con la infraestructura necesaria para proporcionarle el mejor servicio: personal capacitado, grandes almacenes, facturación automatizada, mostradores con servicio inmediato, guillotinas, sistemas y equipo de cómputo constantemente actualizados; además de líneas telefónicas, estacionamiento para clientes y el más rápido servicio de entrega a domicilio, con equipo de transporte comunicado por radio con la central de embarques.
                        Estamos conectados en red, lo que nos permite surtir su pedido de inmediato con el enlace instantáneo, que en cuestión de segundos cuantifica la disponibilidad de los productos.
                        La capacidad total de nuestros almacenes supera los 100,000 m3., lo que nos proporciona una alta seguridad de tener en existencia los productos que ofrecemos en nuestra lista de precios.
                        Contamos con servicio express de entrega de mercancía en nuestras propias sucursales o en los talleres de impresión. Los pedidos para entrega a domicilio, dentro del área metropolitana de la Ciudad de México, se entregan en un promedio de cuatro horas. Para el interior de la República, entregamos rápidamente a su línea de transporte preferida.
                    </p>
                    <p className="texto-nosotros">
                        En Papel, S.A., nuestros clientes tienen la certeza de obtener precios justos, productos de alta calidad, y el mejor servicio del mercado. Nos superamos día a día para lograr la excelencia en servicio que nuestros clientes merecen.
                        Los materiales que vendemos, sean estos de México, de Norteamerica, de Sudamerica, Europa o Asia, tienen un perfil común a todos, “la mayor calidad al menor precio posible”.
                    </p>
                    <p className ="texto-nosotros">
                        En Papel, S.A., tenemos los papeles más utilizados en las artes gráficas, como son: el Bond, papeles cubiertos, cartulina sulfatada SBS, cartón caple, papeles adhesivos, papel autocopiante, papel sintético Polypap®, MagneCote y muchos otros papeles, cartulinas y cartones para impresión; así como cajas de cartón corrugado y otros materiales para empaque.
                    </p>
                    <p className ="texto-nosotros">     
                        En Papel, S.A., ofrecemos seriedad y profesionalismo que da confianza. Estos atributos nos han permitido conformar una empresa orgullosamente mexicana, líder en su ramo, y referencia obligada para todos nuestros competidores; distinción que en un mercado tan competido, es un privilegio y un honor que refrenda nuestro programa de mejora continua.
                        Nuestra oferta permanente, es nunca defraudar la confianza de los clientes que nos favorecen con su preferencia.
                    </p>
                    <p className ="texto-nosotros">
                        Con orgullo aseguramos que el papel de Papel, S.A., está presente en la vida diaria del hombre, en la comunicación, la historia, la religión, la cultura, la educación, el arte, el diseño, la diversión, la administración, el empaque, la promoción, la publicidad, la literatura, la arquitectura, la imaginación, la difusión, y siempre en la impresión.
                        El papel es comunicación; por eso,
                        si quieres el mejor papel y el mejor servicio, comunícate con papel... con Papel, S.A.
                    </p>
                 
                </div>
                <BotonLinkFull path="/contacto" accionBoton="Contactanos"/>
            </div>
            <div className="banner-contenedor1" >
                <ContenedorSeccion>
                    <Banner  bannerImg={almacen} alt="almacen" />
                </ContenedorSeccion>
            </div>

            <FooterPrincipal />
        </>
    );
}

export default NosotrosPage;
