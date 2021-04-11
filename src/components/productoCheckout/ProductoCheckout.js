import React from 'react';
import './ProductoCheckout.css';
const ProductoCheckout = ({producto,descuento}) => {
   
    return (
        <div className="producto-checkout-container">
            <div className="producto-descripcion">
                {producto.clave} - {producto.descripcion}
            </div>
            <div className="producto-checkout-datos">
                <div className="producto-checkout-cantidad producto-checkout-propiedad">
                    <p>Cantidad:</p>
                    <p>{producto.cantidad}</p> 
                </div>
                <div className="producto-checkout-descuento producto-checkout-propiedad">
                    <p>Descuento:</p>
                    <p>{producto.modoVenta === 'N' ? '0.00' : descuento}</p>
                   
                </div>
                <div className="producto-checkout-precio producto-checkout-propiedad">
                    <p>Precio:</p>
                    <p>{producto.precio}</p>
                     
                </div>
                <div className="producto-checkout-importe producto-checkout-propiedad">
                    <p>Importe:</p>
                    <p>{producto.importe}</p>
                </div>
            </div>
            
            
        </div>
    );
}

export default ProductoCheckout;
