import React from 'react';
import Swal from 'sweetalert2';
import {actualizarTotalesCarrito,calcularImporteParaDescuento} from '../../../helpers/cartHelper';
import {  useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {numberFormat} from '../../../helpers/utils'
import { startQuitarProducto, startVaciarCarrito, actualizarImportes } from '../../../actions/carrito'  
import ProductoCarrito from '../../../components/productoCarrito/ProductoCarrito';

import './CarritoPage.css'

const CarritoPage = () => {
    const carritoState = useSelector(state => state.carrito);
    const descuentosState = useSelector(state => state.descuentos);

    const dispatch = useDispatch()
    const history = useHistory()
  

    const seguirComprando = () =>{
        history.push("/catalogo");
    }

    const revisar= () =>{
        history.push("/checkout");
    }

    const vaciarCarrito = () =>{  
        if(Object.keys(carritoState.productos).length !== 0){
            Swal.fire({
                title: `Desea vaciar el carrito?`,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: "Cancelar",  
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Vaciar!'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    if(carritoState.userId){
                        dispatch(startVaciarCarrito(carritoState))
                    }
                    
                    Swal.fire('El carrito se ha vaciado!', '', 'success')
                } 
            })
        }  
       
    }

    const actualizarImportesProducto = (index,cantidad,importe) =>{
       let newProds = [...carritoState.productos];
       let newProd = {...carritoState.productos[index]};
       
       newProd.cantidad = cantidad;
       newProd.importe = importe  
       newProds[index] = newProd
       const newTotal = actualizarTotalesCarrito(newProds)
       const newImporteDesc = calcularImporteParaDescuento(newProds)
  
       const descuento = descuentosState.find(descuento => newImporteDesc <= descuento.importe );
   
       dispatch(actualizarImportes(newProds,newTotal,newImporteDesc,descuento.descuento))
    }
    const quitarProducto = (producto,index) =>{
        Swal.fire({
            title: `Desea quitar ${producto.clave} del carrito?`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: "Cancelar",  
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Quitar!'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const newProductos = [...carritoState.productos]
                newProductos.splice(index,1)
                //const newTotal = actualizarTotalesCarrito(newProductos)
                const newTotal = actualizarTotalesCarrito(newProductos)
                const newImporteDesc = calcularImporteParaDescuento(newProductos)
              
                const descuento = descuentosState.find(descuento => newImporteDesc <= descuento.importe );
                dispatch(startQuitarProducto(newProductos,newTotal,newImporteDesc,descuento.descuento))
                Swal.fire(`Se elimino el producto ${producto.clave}`, '', 'success')
            } 
        })

    }

    return (
        <div>
            <div className="carrito-header">
                <div className="prod">Producto</div>
                <div className="cant">Cantidad</div>
                <div className="prec">Precio</div>
                <div className="impor">Importe</div>
                
            </div>
           {
                Object.keys(carritoState.productos).length === 0 ? 
                <div className="carrito-vacio">
                    <p>Tu carrito está vacío</p>
                    <div className="botones-carrito">
                        <button onClick={seguirComprando}>Comprar</button>
                    </div>
                </div>
                : null
           }
            {carritoState.productos.map((producto,index) => <
                ProductoCarrito  
                    key={producto.id} 
                    producto={producto} 
                    quitarProducto = {quitarProducto}
                    actualizarImportesProducto= {actualizarImportesProducto}
                    index = {index}
                />)}

            <div className="carrito-footer">
                <div className="botones-carrito">
                    <button className="continuar-comprando" onClick={seguirComprando}>Seguir Comprando</button>
                    <button className="vaciar-carrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>
                <div className="total-carrito">
                    <p>Importe:  {numberFormat(carritoState.total)} </p> 
                    <p>Descuento:  {carritoState.descuento} % </p> 
                    <p>Total:  {numberFormat(carritoState.total -(carritoState.importeDesc* (carritoState.descuento/100)))} </p> 


                </div>
                <div className="checkout-carrito">
                    <button onClick={revisar}>Revisar</button>
                </div>

               
            </div>
        </div>
    );
}

export default CarritoPage;
