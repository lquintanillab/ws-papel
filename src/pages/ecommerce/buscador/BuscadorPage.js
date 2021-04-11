import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSelectGroup } from '../../../hooks/useSelectGroup';
import SelectorOptions from '../../../components/selector/SelectorOptions';
import { reasignarFiltros, buscarProductos } from '../../../helpers/busquedaHelper';
import ProductosEcPage from '../productos/ProductosEcPage';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom"
import {startLoading, endLoading} from '../../../actions/ui'
 
import './BuscadorPage.css'

const BuscadorPage = () => {

    let busquedaInicial = {
        uso:'',
        clasificacion:'',
        medida:'',
        gramaje:'',
        calibre:'',
        puntos:'',
        tipo:''
    }

    let history = useHistory();

    const dispatch = useDispatch();

    const productosState = useSelector(state => state.productos);    
  
    const [clasificaciones, setClasificaciones] = useState([]);
    const [medidas, setMedidas] = useState([]);
    const [gramajes, setGramajes] = useState([]);
    const [calibres, setCalibres] = useState([]);
    const [usos, setUsos] = useState([]);
    const [puntos, setPuntos] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [productos, setProductos] = useState([]);

    const[ selectorGroup, handleSelectChange,resetSelectorGroup ] = useSelectGroup(busquedaInicial);
    const buscar = (e) =>{

        e.preventDefault();
        dispatch(startLoading());
        const productosSearch = buscarProductos(productosState,selectorGroup);
        setProductos(productosSearch)
        dispatch(endLoading());
        
    }

    const onChangeSelector = (e)=>{

        handleSelectChange(e)
        const newFilters = reasignarFiltros(productosState, e.target.name, e.target.value,selectorGroup)

        if(e.target.name ==='uso'){
    
            setClasificaciones(newFilters.newClasificaciones);
            setMedidas(newFilters.newMedidas);
            setGramajes(newFilters.newGramajes);
            setCalibres(newFilters.newCalibres);
            setPuntos(newFilters.newPuntos);
            setTipos(newFilters.newTipos);  
        }

        if(e.target.name ==='clasificacion'){
            setMedidas(newFilters.newMedidas);
            setGramajes(newFilters.newGramajes);
            setCalibres(newFilters.newCalibres);
            setPuntos(newFilters.newPuntos);
            setTipos(newFilters.newTipos);  
        }
        
    }
    
    const resetFiltros = () =>{
        resetSelectorGroup();
        const newFilters = reasignarFiltros(productosState)
        setMedidas(newFilters.newMedidas);
        setGramajes(newFilters.newGramajes);
        setClasificaciones(newFilters.newClasificaciones);
        setCalibres(newFilters.newCalibres);
        setPuntos(newFilters.newPuntos);
        setTipos(newFilters.newTipos); 

        setProductos([])
    }

    useEffect(() => {
        const cargarFiltros = () =>{
            const medidasProd = new Set( productosState.map(producto => producto.medida) );
            setMedidas([...medidasProd]);
            const gramajesProd = new Set( productosState.map(producto => producto.gramos) );
            setGramajes([...gramajesProd]);
            const clasificacionesProd = new Set( productosState.map(producto => producto.clasificacion2) );
            setClasificaciones([...clasificacionesProd]);
            const calibresProd = new Set( productosState.map(producto => producto.calibre) );
            setCalibres([...calibresProd]);
            const usosProd = new Set( productosState.map(producto => producto.uso) );
            setUsos([...usosProd]);
            const puntosProd = new Set( productosState.map(producto => producto.puntos) );
            setPuntos([...puntosProd]);
            const tiposProd = new Set( productosState.map(producto => producto.tipo) );
            setTipos([...tiposProd]);
        }

        cargarFiltros()
        /* const productosSearch = buscarProductos(productosState,selectorGroup);
        setProductos(productosSearch) */

        return () => {
            /* Funcion limpiar*/ 
        };
    }, []);

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
        <div className="buscador-selectors-group">
            <div className="content-selectors">
                <SelectorOptions opciones={usos} tipo="uso" onChangeSelector={onChangeSelector} selected={selectorGroup.uso} />
                <SelectorOptions opciones={clasificaciones} tipo="clasificacion" onChangeSelector={onChangeSelector} selected={selectorGroup.clasificacion} />
                <SelectorOptions opciones={medidas} tipo="medida" onChangeSelector={onChangeSelector} selected={selectorGroup.medida} />
                <SelectorOptions opciones={gramajes} tipo="gramaje" onChangeSelector={onChangeSelector} selected={selectorGroup.gramaje} />
                <SelectorOptions opciones={puntos} tipo="puntos" onChangeSelector={onChangeSelector} selected={selectorGroup.puntos} />
                <SelectorOptions opciones={calibres} tipo="calibre" onChangeSelector={onChangeSelector} selected={selectorGroup.calibre}/>
                <SelectorOptions opciones={tipos} tipo="tipo" onChangeSelector={onChangeSelector} selected={selectorGroup.tipo} />
            </div>
            <div className="buttons-selectors">
                <button type="button" onClick={buscar}>Buscar</button>
                <button type="button" onClick={resetFiltros}>Limpiar</button>
                <button onClick={() => history.goBack()}>Regresar</button>
            </div>
         
        </div>
        <div className="buscador-productos-container">
            <ToastContainer/>
            {productos.map(producto => <ProductosEcPage key ={producto.id} producto={producto} notify={notify}  /> )}
        </div>

       </div>
    );
}

export default BuscadorPage;
