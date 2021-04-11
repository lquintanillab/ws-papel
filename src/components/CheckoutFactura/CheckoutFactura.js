import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import SelectorDirecciones from '../SelectorDirecciones/SelectorDirecciones';


import './CheckoutFactura.css'

const CheckoutFactura = ({pedido,setPedido}) => {

    const [checked, setChecked] = useState(false);
    const [checkedMisma, setCheckedMisma] = useState(true);
    const profileState = useSelector(state => state.profile)
    const [direccionFactura, setDireccionFactura] = useState();

    const handleChange = (e) => {
     
        setChecked(!checked)
        if(e.target.checked){
            setPedido({
                ...pedido,
                factura: JSON.parse(e.target.checked),
                nombre: profileState.nombre,
                rfc: profileState.rfc,
             }) 
        }
        
    }



    const onChangeDirecciones = (e) => {
       
        if(e.target.value){
            setDireccionFactura(JSON.parse(e.target.value));
            setPedido({
                ...pedido,
                direccionFactura: JSON.parse(e.target.value)
             })
        }else{
            setDireccionFactura(null);
            setPedido({
                ...pedido,
                direccionFactura: pedido.direccionEnvio
             })
        } 
     }
     const onChangeUso = (e) =>{
         console.log(e.target.value);
        setPedido({
            ...pedido,
            usoDeCfdi: e.target.value
         })
     }

     const checkMismaDireccion = () => {
        setCheckedMisma(!checkedMisma)
        if(!checkedMisma){
            setDireccionFactura(null);
            setPedido({
                ...pedido,
                direccionFactura: pedido.direccionEnvio
             })
        }
     }

    return (
        <div>
            <label className="label-container"> Facturar
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            {checked ? (<div className="datos-factura">
                <p>Datos de Facturacion</p>                
                <p>{profileState.nombre} - {profileState.rfc}</p>
                <select id="uso-cfdi"  onChange= {onChangeUso}>
                    <option value="">--Seleccione uso de Cfdi--</option>
                    <option value="GO1">Adquisicion de mercancias</option>
                    <option value="GO3">Gastos en general</option>
                    <option value="P01">Por definir</option> 
                </select>
                <div className="direccion-factura">
                    <p>Direccion Factura</p> 
                    <div className="seleccionar-direcciones">
                        <label className="label-container">  {direccionFactura ? direccionFactura.alias:( !checkedMisma ? 'Seleccione una dirección' : 'Facturar a Direccion de envío')}
                            <input type="checkbox" checked={checkedMisma} onChange={checkMismaDireccion }/>
                            <span className="checkmark"></span>
                        </label>
                        { !checkedMisma ? <SelectorDirecciones onChangeDirecciones= {onChangeDirecciones} /> : null  }
                    </div>
                </div>
            
            </div>): null}
        </div>
    );
}

export default CheckoutFactura;
