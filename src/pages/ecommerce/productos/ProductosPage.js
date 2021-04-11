import React,  {useState, useEffect} from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from "react-router-dom";

import ProductosEcPage from './ProductosEcPage';
import { useDispatch, useSelector } from 'react-redux';
import { breadcrumbUpdate } from '../../../actions/ui';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';


import './ProductosPage.css';
import 'react-toastify/dist/ReactToastify.css';


const ProductosPage = (props) => {

    const configToast =  {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const notify = (producto) =>{
        toast(`${producto.clave}  Ha sido agregado al carrito`,configToast)
    }

      
    const [productos, guardarProductos] = useState([]); 
    const dispatch = useDispatch();
    let location = useLocation();
    const   query = queryString.parse(location.search)
    let query2 = new URLSearchParams(useLocation().search);

    console.log(location.search);
    //console.log(productos);
    //console.log(JSON.parse(productos));
    useEffect(()=>{
      
         //const url = `http://localhost:4000/productos${location.search}`;
        //const url = `http://localhost:8000/productos${location.search}`;
        //const url = `http://localhost:8000/api/productos-ecommerce/${query.clasificacion2.toUpperCase()}`;
        const url = `http://api.papelsa.mobi:8000/api/productos-ecommerce/${query.clasificacion2.toUpperCase()}`;
        
       
    
        const consultarApi = async () =>{
    
            const data = await axios.get(url)
            console.log(data.data);
            const prods = data.data
            //const prods = data.data.map(data => data.fields)
            guardarProductos(prods);
            
        }
        consultarApi();
        const nivel = 3
        dispatch(breadcrumbUpdate({
            nivel:nivel,
            path: `/productos${location.search}`,
            name: query2.get("clasificacion2"),
        }))
    
    },[]);

    return (
        <> 
             <ToastContainer/>
             <div className= "titulo-productos-container"> 
                    <h1 className="page-title">{query.clasificacion2.toUpperCase()}</h1>  
                    <div className="breadcrumb">
                        <Breadcrumbs/>
                    </div>
                </div> 
           
            <div className="productos">
                {
                    productos.map(producto => <ProductosEcPage key ={producto.id} producto={producto} notify={notify} />) 
                } 
            </div>
        </>
        
    );
}

export default ProductosPage;
