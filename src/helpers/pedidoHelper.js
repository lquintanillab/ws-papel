
import Pedido, { Cliente }  from '../models/pedidoModels'



export const pedidoCreate = (pedido) =>{

    let ped = new Pedido();
    ped.userId = pedido.userId;
    ped.folio = pedido.folio;
    ped.importe = pedido.importe;
    ped.nombre = pedido.nombre;
    ped.rfc = pedido.rfc
    ped.tipo = 'CONTADO'
    ped.formaDePago = 'TARJETA'
    ped.moneda = 'MXN'
    ped.tipoDeCambio = 1.0000
    ped.importe = pedido.importe
    ped.descuento = pedido.descuentoPorcentaje
    ped.descuentoImporte = pedido.descuentoImporte
    ped.subtotal = pedido.subtotal
    ped.impuesto = pedido.iva
    ped.total = pedido.total
    ped.cliente = crearClientePedido(pedido);
    ped.partidas = pedido.productos
    ped.envio = pedido.direccionEnvio
    ped.usoDeCfdi = pedido.usoDeCfdi
    ped.estado =  'PENDIENTE_PAGO'
    //console.log(`Pedido: ${JSON.stringify(ped)}`);
    //crearPartidas(pedido.productos)

    return ped
}


export const crearClientePedido = (pedido)=>{
    let cliente = new Cliente();
    cliente.rfc = pedido.rfc
    cliente.nombre = pedido.nombre
    return cliente;

}


export const crearPartidas = (productos) =>{
    const partidas = productos.map((producto)=>{
        if(producto.hxp){
            //console.log(producto.hxp * producto.cantidad);
        }
        const prod = {...producto, cantidad: producto.hxp * producto.cantidad}  
        return prod 
    })
    return partidas
}   