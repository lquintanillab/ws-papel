import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductoPage from '../producto/ProductoPage';

//import Buscador from '../../layout/buscador/Buscador'
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { breadcrumbUpdate } from '../../../actions/ui';



import './ClasificacionesPage.css'
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';



const ClasificacionesPage = (props) => {

        const [productos, guardarProductos] = useState([]); 
        const dispatch = useDispatch();
 
        let location = useLocation();
        let query = new URLSearchParams(useLocation().search);
       

       
        
    useEffect(()=>{
        //const url = `http://localhost:4000/clasificacion${location.search}`;
        //const url = `http://localhost:8000/api/clasificacion-ecommerce${location.search}`;
        const url = `http://api.papelsa.mobi:8000/api/clasificacion-ecommerce${location.search}`;
        const consultarApi = async () =>{
            const data = await axios.get(url)
            guardarProductos(data.data);
        }
    
        consultarApi();
        const nivel = 2
        dispatch(breadcrumbUpdate({
            nivel: nivel,
            path: `/clasificaciones${location.search}`,
            name: query.get("uso"),
            
        }))
    
    },[props, location.search,dispatch, query]);

    return ( <div className="content-productos">
                {/*  <Buscador className="buscador"/> */}
                <div className= "titulo-productos-container"> 
                    <h1 className="titulo-productos">
                        {productos[0]?.uso}
                    </h1>   
                    <div className="breadcrumb">
                        <Breadcrumbs/> 
                    </div>
                </div>            
                <p className = "descripcion-uso">Papel s.a., Tiene el papel o sustrato mas adecuado para tu proyecto de {productos[0]?.uso}</p>
                <div className="contenedor-productos">   
                    {productos.map( prod => (<ProductoPage producto = {prod} accionBoton= "Ver Productos"  key={prod.id} path={{
                    pathname: "/productos",
                    search: `?clasificacion2=${prod.descripcion.toUpperCase()}`
                }} />))}
                </div> 
               {/*  <Route  path="/pagar" component={PagoTarjeta} /> */}
        </div>
    );
}

export default ClasificacionesPage;