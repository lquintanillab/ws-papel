import React,{useState} from 'react';
import {numberFormat} from '../../../helpers/utils'
import { useDispatch, useSelector } from 'react-redux';
import { startAgregarProducto} from '../../../actions/carrito';
import './ProductosPage.css'

import prod from '../../../assets/CIRCULO-05.png'



const ProductosEcPage = ({producto,notify}) => {

    const dispatch = useDispatch();
    const [importe, setImporte] = useState(0.00);
    const [hojasCortado, setHojasCortado] = useState(0.00);
    const [cantidad, setCantidad] = useState('');
    const carritoState = useSelector(state => state.carrito);
    const descuentosState = useSelector(state => state.descuentos);


  

    const handleInputChange= (e) =>{
        const factor = 1000
        let cantidad = e.target.value / factor
        if(producto.paquete){
            cantidad = (e.target.value / factor) * producto.hxp
            setHojasCortado(e.target.value  * producto.hxp)
        }
        const importe1 = (cantidad * producto.precioContado).toFixed(2)
        setCantidad(e.target.value)
        setImporte(importe1)
    }

    const addToCart =async () =>{
        if(!cantidad){
            
        }else{
            const newTotal = Number(carritoState.total) +Number(importe);
            const importeParaDescuento = producto.modoVenta === 'B' ? Number(carritoState.importeDesc) +Number(importe) : Number(carritoState.importeDesc)
            const descuento = descuentosState.find(descuento => importeParaDescuento <= descuento.importe );

            await dispatch(startAgregarProducto({
                id: producto.id,
                clave: producto.clave,
                descripcion: producto.descripcion,
                precio: producto.precioContado,
                paquete: producto.paquete,
                hxp: producto.hxp,
                importe: Number(importe),
                cantidad: Number(cantidad),
                producto: producto.producto,
                modoVenta: producto.modoVenta
            },newTotal,importeParaDescuento,descuento.descuento)) 
            setCantidad('')
            setImporte(0)
            setHojasCortado(0.00)
            notify(producto)
        }
    }

    return (
        <div className="producto">
            { <img src={prod} alt={producto.clave}/>}
            <p className="nombre-producto">{producto.clave}</p> 
            <p className="nombre-producto1" >{producto.descripcion}</p>
            <div className="datos-producto">
                {/* <p className="descripcion-producto" >Medida : {producto.medida}</p>
                <p className="descripcion-producto" >Marca : {producto.marca}</p> */}
                <p className="descripcion-producto" ></p>
                {producto.paquete ? <p>Presentación: Paquete con {producto.hxp} hojas</p>: null}
                {producto.paquete ? <p>Precio por millar para este producto</p>: null}
                {hojasCortado > 0.00 ? <p>{cantidad} Paquete(s) Corresponde a {hojasCortado} hojas</p>: null}
               {/*  {producto.existencia.cantidad__sum ===  0.00 ? <p>Agotado</p>: <p></p>} */}
            </div>
            
            <div className="price-wrapper">
                <p className="descripcion-producto">Precio: </p> 
                <p className="descripcion-producto color-resaltado">{numberFormat(producto.precioContado)}</p>  
                <p className="descripcion-producto"> Importe: </p> 
                <p className="descripcion-producto color-resaltado">{numberFormat(importe) }</p> 
            </div>  
            {   (producto.activo && producto.existencia.cantidad__sum !==  0.00 ) ? 
                <div className="producto-carrito">
                    <input type="number" className="producto-cantidad" placeholder={producto.paquete ? "Paquetes" : "Cantidad"} onChange={handleInputChange} value={cantidad} />
                    <button className="producto-add" onClick={addToCart}>
                            Agregar al carrito
                            <i className="fas fa-shopping-cart icono-cart" aria-hidden="true"></i>
                    </button>
                </div> :
                (producto.existencia.cantidad__sum ===  0.00 && producto.activo ) ?
                <div className="producto-agotado">
                    <p>Producto sin existencia</p>
                </div> :
                <div className="producto-agotado">
                    <p>A la venta proximamente</p>
                </div> 
            }
        </div>
    );
}

export default ProductosEcPage;
