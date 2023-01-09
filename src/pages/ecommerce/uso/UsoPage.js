import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductoPage from '../producto/ProductoPage';
//import Buscador from '../../../components/buscador/Buscador';
import { apiUrl } from '../../../config/axiosInstance';
import './UsoPage.css';
import BuscadorButton from '../../../components/buscadorButton/BuscadorButton';


const UsoPage = () => {
    const [usos, guardarUsos] = useState([]); 

useEffect(()=>{
    const url = `${apiUrl.url}uso-ecommerce`;

    const consultarApi = async () =>{

        const data = await axios.get(url)
        guardarUsos(data.data);
    }

    consultarApi();

},[]);
    return ( 
    <div className="content" >
     <h1 className="titulo-uso">Catálogo de productos Papel s.a.</h1>
     <p className = "descripcion-uso">En Papel s.a., te ofrecemos los papeles más utilizados en las Artes Gráficas, Escritura e Impresión</p>
     {/* <Buscador className="buscador"/> */}
     <BuscadorButton />
    <div className="contenedor-uso">   
          {usos.map( uso => (<ProductoPage producto = {uso} accionBoton= "Ver más" key={uso.id} path={{
                    pathname: "/clasificaciones",
                    search: `?uso=${uso.nombre}`
                }} />))}
    </div> 
    </div>
    );
}
 
export default UsoPage;