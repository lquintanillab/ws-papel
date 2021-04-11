
export const actualizarTotalesCarrito = (productos) =>{
    let total = 0.00;
    for( let producto of productos){
        total = total + producto.importe;
    }
    return total.toFixed(2)
}

export const calcularImporteParaDescuento = (productos) =>{
    let importeParaDescuento = 0.00;
    for( let producto of productos){
     
        if(producto.modoVenta === 'B'){
            importeParaDescuento= importeParaDescuento + producto.importe;
        }
    }
    return importeParaDescuento.toFixed(2)
}

export const actualizarDescuentosCarrito = (descuentos,total) =>{
    
   /*  const descuentoLow = descuentos.find(descuento => total > descuento.importe );
    const descuentoHigh = descuentos.find(descuento => total <= descuento.importe ); */
    
}

export const asignarCarrito = () =>{
    
}