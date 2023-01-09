
export default class Pedido {
    userId = null
    id = null
    fecha = null
    sucursal = null
    folio = null
    // Type Cliente
    cliente = null
    nombre = null
    rfc = null
    tipo = null
    formaDePago = null
    moneda = null
    tipoDeCambio = null
    // Type List<PedidoDet>
    partidas = []
    // Importes
    importe = null
    descuento = null
    descuentoImporte = null
    subtotal = null
    impuesto = null
    total = null
    descuentoOriginal = null
    descuentoEspecial  = null
    cargosPorManiobra = null
    comisionTarjeta = null
    comisionTarjetaImporte = null 
    corteImporte = null
    //Otros
    kilos = null
    comprador = null
    comentario = null
    envio = null
    cfdiMail = null
    usoDeCfdi = null
    sinExistencia = null
    chequePostfechado = null
    status = null
    // Log
    inicio = null
    dateCreated = null
    lastUpdated = null
    createUser = null
    updateUser = null
    autorizacion = null
    autorizacionesRequeridas = null
    facturaSerie = null
    facturaFolio = null
    uuid = null

}

export class PedidoDet{
    id = null
    clave  = null
    descripcion = null
    //Type Producto
    producto = null
    unidad = null
    presentacion = null
    gramos = null
    nacional = null
    modoDeVenta = null
    //Importes
    cantidad = null
    precio = null
    importe = null
    descuento = null
    descuentoImporte = null
    subtotal = null
    impuesto = null
    impuestoTasa = null
    total = null
    kilos = null
    // valores Historicos
    precioOriginal = null
    precioDeLista = null
    descuentoOriginal = null
    descuentoEspecial = null
    importeCortes = null
    faltante = null
    // Type Corte
    corte = null
    comentario = null
    //Bitacora
    dateCreated = null
    lastUpdated = null
    createUser = null
    updateUser = null



}

export class Cliente{
    rfc = null
    nombre = null

}

export class Corte{
    tantos = null
    instruccion
    cantidad = null
    precio = null
    importe = null
    limpio = null
    refinado = null
   
}

export class InstruccionDeEnvio{
    tipo  = null
    direccion = null
    transporte = null
    telefono = null
    contacto = null
    horario = null
    comentario = null
    fechaDeEntrega = null
    sucursal = null
  
}

/*
export class Cliente {
    id = null
    nombre = null
    clave = null
    rfc = null
    cfdiMail = null
    credito = null
    permiteCheque = null
    folioRFC = null
    chequeDevuelto = null
    activo = null
    juridico = null
    medios = null
    direccion = null
    direcciones = null
    direccionesEntrega = null
    dateCreated = null
    lastUpdated = null
    telefonos = null
    createUser = null
    updateUser = null
    socios = null
    constructor(){
         
    }
}

*/




