import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Buscador from '../../../components/buscador/Buscador';
import { buscarProductosText} from '../../../helpers/busquedaHelper';
import { ToastContainer, toast } from 'react-toastify';
import ProductosEcPage from '../productos/ProductosEcPage';





const BuscadorTextPage = () => {

    const productosState = useSelector(state => state.productos )
    const [busqueda, setBusqueda] = useState("");
    const [productosFind, setProductosFind] = useState([]);

    const handleBuscadorChange = (e) =>{
        const result = buscarProductosText(productosState,e.target.value)
        setProductosFind(result)
        setBusqueda(e.target.value)
    }


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

    return (
        <div className="content-buscador" >
        <h1 className="titulo-buscador">Catálogo de productos Papel s.a.</h1>
        <p className = "descripcion-buscador">En Papel s.a., te ofrecemos los papeles más utilizados en las Artes Gráficas, Escritura e Impresión</p>
            <Buscador handleBuscadorChange={handleBuscadorChange} />
            <p>{productosFind.length} Productos encontrados</p>
            <div className="buscador-productos-container" >
            <ToastContainer/>
            {productosFind.map(producto => <ProductosEcPage key ={producto.id} producto={producto} notify={notify}  /> )}
        </div>
        </div>
    );
}

export default BuscadorTextPage;
