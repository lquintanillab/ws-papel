import React, { useState } from 'react';


import './ProductoCarrito.css'


const ProductoCarrito = ({producto,quitarProducto,actualizarImportesProducto,index}) => {

    const [cantidad, setCantidad] = useState((producto.cantidad).toFixed(0));
    const [importe, setImporte] = useState((producto.importe).toFixed(2));
    const handleInputChange = (e) =>{
        const factor = 1000
        const cantidad = Number(e.target.value).toFixed(0)
        setCantidad(cantidad)
        let importeProd = Number(e.target.value/factor * producto.precio).toFixed(2)
        if(producto.paquete){
            importeProd = Number((e.target.value * producto.hxp)/factor * producto.precio).toFixed(2)
        }

        setImporte(importeProd)
        actualizarImportesProducto(index,Number(e.target.value),Number(importeProd))
    }

  

    return (
        <div className="prod-container">
            <div className="prod-image">
               imagen
            </div>
            <div className="prod-datos">
               {producto.clave}  -  {producto.descripcion}
            </div>
       
            <input type="number" className="prod-cantidad producto-cantidad" placeholder="Cantidad" onChange={handleInputChange} value={cantidad}/>
          
            <div className="prod-precio">
                {producto.precio}
            </div>
            <div className="prod-importe">
                {importe}
            </div>
            <div className="prod-remove" onClick={()=>{quitarProducto(producto,index)}}>
                <i className="fas fa-times icono-cerrar"></i>
            </div>
        </div>
    );
}

export default ProductoCarrito;
