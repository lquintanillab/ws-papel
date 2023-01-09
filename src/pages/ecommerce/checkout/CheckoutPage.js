import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'; 
import ProductoCheckout from '../../../components/productoCheckout/ProductoCheckout';
import StripeCheckoutButton from '../../../components/stripeCheckout/StripeCheckoutButton';
import {numberFormat} from '../../../helpers/utils'
import { useHistory } from 'react-router-dom';
import axios from 'axios';



import { apiUrl } from '../../../config/axiosInstance';

import './CheckoutPage.css';
import CheckoutFactura from '../../../components/CheckoutFactura/CheckoutFactura';
import SelectorDirecciones from '../../../components/SelectorDirecciones/SelectorDirecciones';
import { db } from '../../../config/firebaseConfig';
import { pedidoCreate } from '../../../helpers/pedidoHelper';


const CheckoutPage = () => {
    const urlFolio = `${apiUrl.url}next-folio?serie=ECOMMERCE&entidad=PEDIDO`;
    const urlUpdateFolio = `${apiUrl.url}update-folio?serie=ECOMMERCE&entidad=PEDIDO`;

    const pedidoIni = {
        userId: '',
        productos: [],
        importe: 0.00,
        descuentoPorcentaje: 0.00,
        descuentoImporte: 0.00,
        costoEnvio: 0.00,
        subtotal: 0.00,
        iva: 0.00,
        total: 0.00,
        direccionEnvio: {},
        factura: false,
        nombre: '',
        rfc: '',
        usoDeCfdi: '',
        direccionFactura: {},
        estado: 'PENDIENTE_PAGO',
        cliente:{}
    }

    

    const carritoState = useSelector(state=> state.carrito);
    const profileState = useSelector(state => state.profile)
    const [pedido,setPedido] = useState(pedidoIni)
    const [direccionEnvio, setDireccionEnvio] = useState();
    const [importes, setImportes] = useState({});
    const {importe, descuento, importeDescuento,costoEnvio, subtotal, iva, aPagar} = importes;

    let history = useHistory();

    const onChangeDirecciones = (e) =>{
       
       if(e.target.value){
         
           setDireccionEnvio(JSON.parse(e.target.value));
        
           setPedido({
               ...pedido,
               direccionEnvio: JSON.parse(e.target.value),
               direccionFactura: JSON.parse(e.target.value),
            })
            pedidoCreate(pedido)
            
       }else{
           setDireccionEnvio(null);
       }
        
        
    }


     const handleClickAddItem = () => {
        history.push(`/add-direccion/1000`);
    } 

    const confirmarPedido = async () => {
        const data = await axios.get(urlFolio)
        //console.log(data);
        pedido.folio = data.data[0].folio;
        const newPedido = JSON.stringify(pedidoCreate(pedido));

        const docRef = await db.collection('pedidos').add(JSON.parse(newPedido))
        await axios.get(urlUpdateFolio);
        const docSnap = await docRef.get();
        return docSnap
         /* .catch(error => {
            console.log("Hubo un error al crear el carrito en Firebase!!!");
            console.log(error);
        }) */
    }

    useEffect(() =>{

        const validarPedido = async ()=>{

            const pedidoFb = await db.collection('pedidos').where("userId","==", carritoState.userId ).where("estado", "==", "PENDIENTE_PAGO").get()
            //console.log("Desde validar pedido");
            if(pedidoFb.docs.length > 0){
                const pedidoSnap = await pedidoFb.docs[0];
                const pedidoRef = pedidoSnap.ref;
                pedidoRef.delete();
            } 
        }
       
        validarPedido()
       

        const calcularTotales = () => {
            const {total,descuento, importeDesc} = carritoState;
            const importeDescuento = importeDesc *(descuento/100)
            let subtotal = total - importeDescuento;
            let costoEnvio = 0.00;
            if(subtotal < 2000 && total > 0.00 ){
                costoEnvio = 300;
                subtotal = subtotal + costoEnvio;
            }

            const iva = subtotal * .16;
            const aPagar = subtotal + iva;

            setImportes({
                userId: carritoState.userId,
                importe: total,
                descuento,
                importeDescuento,
                costoEnvio,
                subtotal,
                iva,
                aPagar
            })
            setPedido({
                userId: carritoState.userId,
                productos: carritoState.productos,
                importe: total,
                descuentoPorcentaje: descuento,
                descuentoImporte: importeDescuento,
                costoEnvio: costoEnvio,
                subtotal: subtotal,
                iva: iva,
                total: aPagar,
                direccionEnvio: {}, 
                factura: false,
                nombre: profileState.nombre,
                rfc: profileState.rfc,
                usoDeCfdi: '',
                direccionFactura: {},
                estado: 'PENDIENTE_PAGO'
            })

        }

    
        calcularTotales();


    },[carritoState])
    return (
        <div className="checkout-container">
            <h1>Revisa tu pedido</h1>
            <div className="checkout-pedido">
                <div className="checkout-productos">
                    <div className="checkout-datos">
                        <div className="checkout-direccion-envio">
                            <div className="direccion-envio-header">
                                <p>Direccion de envío</p>
                                <SelectorDirecciones onChangeDirecciones= {onChangeDirecciones} />
                            </div>
                            <div className="direccion-envio-datos">
                                {  direccionEnvio ?
                                    <div className="direccion-envio">
                                    <p> Alias: {direccionEnvio.alias}</p>
                                    <p>Recibe: {direccionEnvio.recibe}</p>
                                    <p>Calle: {direccionEnvio.calle}</p>
                                    <p>Colonia: {direccionEnvio.colonia}</p>
                                    <p>C.P. {direccionEnvio.cp}</p>
                                    <p>Telefono: {direccionEnvio.telefono}</p>
                                    </div>
                                    : null
                                }
                            </div>  
                            <p onClick={handleClickAddItem} className="add-direccion-accion">Agregar direccion</p>
    
                        </div>
                        <div className="checkout-otros-datos">
                            <CheckoutFactura pedido={pedido} setPedido={setPedido}/>
                        </div>
                    </div>
                    <div className="checkout-productos-detalle">
                        <div className="productos-detalle-header">
                            <p>Productos</p>
                        </div>
                        {carritoState.productos.map(producto => <ProductoCheckout key={producto.id} producto={producto} descuento = {carritoState.descuento} />)}
                    </div>
            </div>
            <div className="checkout-right">
                <div className="checkout-resumen">
                    <div className="checkout-resumen-header">
                        <p>Totales pedido:</p>
                    </div>
                    <div className="checkout-totales">
                        <div className="checkout-importe">
                            <p className="checkout-importe-label">Importe:</p>
                            <p  className="checkout-importe-valor">{ numberFormat(importe) }</p>
                        </div>
                        <div className="checkout-importe">
                            <p className="checkout-importe-label">% Descuento:</p>
                            <p  className="checkout-importe-valor"> { descuento } %</p>
                        </div>
                        <div className="checkout-importe">
                            <p className="checkout-importe-label">Descuento:</p>
                            <p  className="checkout-importe-valor"> { numberFormat(importeDescuento) }</p>
                        </div>
                        {
                            costoEnvio > 0.00 ?
                            <div className="checkout-importe">
                                <p className="checkout-importe-label">Envio:</p>
                                <p  className="checkout-importe-valor">{ numberFormat(costoEnvio) }</p>
                            </div> :
                            null
                        }
                        <div className="checkout-importe">
                            <p className="checkout-importe-label">Subtotal:</p>
                            <p  className="checkout-importe-valor">{ numberFormat(subtotal) }</p>
                        </div>
                        <div className="checkout-importe">
                            <p className="checkout-importe-label">Iva:</p>
                            <p  className="checkout-importe-valor">{ numberFormat(iva) }</p>
                        </div>
                        <div className="checkout-importe">
                            <p className="checkout-importe-label">Total:</p>
                            <p  className="checkout-importe-valor">{ numberFormat(aPagar) }</p>
                        </div>
                    </div>
                    <div className="checkout-pagar">
                        <StripeCheckoutButton total={aPagar} desactivado={carritoState.total !== 0 && direccionEnvio ? false: true} pedido = {pedido} confirmarPedido = {confirmarPedido} />
                    </div>
                </div>
                <div className="checkout-entrega">
                    <div className="checkout-entrega-header">
                        Datos entrega
                    </div>
                    <p>Para la CDMX y Zona Metropolitana. </p>
                    <p>Su pedido será entregado dentro de las siguientes 24 Horas</p>
                </div>
                <button className="regresar-a-comprar" onClick={()=>{history.push("/catalogo");}}>Seguir Comprando</button>
            </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
