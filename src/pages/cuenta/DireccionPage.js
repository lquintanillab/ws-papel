import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import BotonSubmit from '../../components/BotonSubmit/BotonSubmit';
import Form from '../../components/Form/Form';
import InputForm from '../../components/InputForm/InputForm';
import {  useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
/*Test de Firebase*/
import MapView from '../../components/MapView/MapView';
import Modal from '../../components/modal/Modal';
import Geocode from "react-geocode";


import './Direccion.css'
import { startAddDireccion } from '../../actions/profile';

const DireccionPage = (props) => {

    const dispatch = useDispatch();

    let history = useHistory();

    const profileState = useSelector(state => state.profile)

    const {id} = useParams()

    let direcciones = []
    let direccion = {
        alias: '',
        recibe: '',
        cp: '',
        estado: '',
        ciudad: '',
        colonia: '',
        telefono: '',
        calle: ''
    }

    const [colonias, setColonias] = useState([]);
    const [mostrar, setMostrar] = useState(false);
    const [coords, setCoords] = useState({lat: 59.95,
        lng: 30.33});

    if(profileState.direcciones){
        direcciones = profileState.direcciones
        direccion = direcciones[id]
    }

    const [valueForms, handleInputChange, refresh] = useForm(direccion)

    const { alias,calle, recibe, cp, estado, ciudad, colonia, telefono } =  valueForms;

    const onSubmit = (e) => {
        e.preventDefault();
        
       //  
       if(id === 1000){
         direcciones.push(valueForms)
         dispatch(startAddDireccion(profileState.uid,direcciones))
       }else{
         
           direcciones.splice(id,1)     
           direcciones.push(valueForms)
           dispatch(startAddDireccion(profileState.uid,direcciones))
       }
        history.goBack();
    }

   const searchCP = async (cp) =>{
       if(cp){
           const url = `https://api-sepomex.hckdrk.mx/query/info_cp/${cp}?type=simplified&token=d395cfb4-8c98-44bb-bcf0-cc531723af6f`
           try{
               const data = await axios.get(url)
           
               valueForms.estado = data.data.response.estado
               valueForms.ciudad = data.data.response.municipio
               setColonias(data.data.response.asentamiento);
              

               refresh();
               colonia= ""
           }catch(e){
               
           }
       }else{
          
       }
   }

   const onChangeColonias = (e) =>{
      
        if(e.target.value){
          
            valueForms.colonia = e.target.value
            refresh();
        }
    }   

    // Google Geocode
  /*   Geocode.setApiKey("AIzaSyCZyH8Xr2Mns7RWXUsYqeK0c0QIRnw6XEw");
    Geocode.setLanguage("es");
    Geocode.setRegion("mx");
    Geocode.setLocationType("ROOFTOP"); */
    // Enable or disable logs. Its optional.
    /* Geocode.enableDebug(); */

    //Geocode Mapquest

    

   const getCoordsAndShow = async (e) =>{
        e.preventDefault();
        try{
            const apiKey = 'XxMcUZRSt869NTOzZE0ZFoLGA0wwATBU'
            /* L.mapquest.key = apiKey;

            let geocoder = L.mapquest.geocoding({
            thumbMaps: false,
            maxResults: 3
            });
            geocoder.geocode(['Denver, CO', 'Boulder, CO'], geocodingCallback);
            */
             const json = {
                'options':{
                    'maxResults': 1
                },
                'location':{
                    'street':valueForms.calle,
                    'city':valueForms.ciudad,
                    'state':valueForms.estado,
                    'postalCode':valueForms.cp,
                    'adminArea1':'MX'
                }
            }
            const callback =(result) =>{
                console.log(result);
            }
            //const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${valueForms.calle}, ${valueForms.colonia},${valueForms.ciudad},${valueForms.estado},${valueForms.cp}&maxResults=1`
            //const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&street=${valueForms.calle}&city=${valueForms.ciudad}&state=${valueForms.estado}&postalCode=${valueForms.cp}&maxResults=1`
            const url = `https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&json=${JSON.stringify(json)}`
        
            const response = await axios.get(url)
            console.log(response.data.results[0]);
     
            const { lat, lng } = response.data.results[0].locations[0].displayLatLng;
           
            setCoords({lat,lng}) 
            setMostrar(true) 
        }catch(e){

        }
   }


    return (
        <div className="direccion-contenedor">
            <Form encabezado= "Agregar dirección" handleSubmit={onSubmit}>
            <InputForm
                tipo="text" 
                nombre= "alias" 
                placeholder="Alias"
                valor={direccion?.alias ? alias : alias }  
                handleChange= {handleInputChange}  
            />
             <InputForm
                tipo="text" 
                nombre= "recibe" 
                placeholder="Recibe" 
                valor={direccion?.recibe ? recibe : recibe }   
                handleChange= {handleInputChange}  
            />
            <InputForm
                tipo="text" 
                nombre= "calle" 
                placeholder="Calle y Número" 
                valor={direccion?.calle ? calle : calle }  
                handleChange= {handleInputChange}  
            />  
            <InputForm
                tipo="text" 
                nombre= "cp" 
                placeholder="C.P."  
                valor={direccion?.cp ? cp : cp } 
                handleChange= {handleInputChange}  
            />
            <div className="validacion-cp">
                <p onClick={()=>{searchCP(cp)}}>Validar C.P.</p>
                <select className="select-colonia" id="direcciones" onChange = {onChangeColonias} >
                    <option value="">--Seleccione una Colonia --</option>
                    {/* {colonias?.length >0 ? profileState.direcciones.map(direccion => <option key={direccion.alias} value={JSON.stringify(direccion)}>{direccion.alias}</option>): null } */}
                    {colonias?.length >0 ? colonias.map(colonia => <option key={colonia} value= {colonia} >{colonia}</option>): null }
                </select>
            </div>
            
             <InputForm
                tipo="text" 
                nombre= "estado" 
                placeholder="Estado"  
                valor={direccion?.estado ? estado : estado } 
                handleChange= {handleInputChange}  
            />
             <InputForm
                tipo="text" 
                nombre= "ciudad" 
                placeholder="Ciudad"  
                valor={direccion?.ciudad ? ciudad : ciudad } 
                handleChange= {handleInputChange}  
            />
            
             <InputForm
                tipo="text" 
                nombre= "colonia" 
                placeholder="Colonia"  
                valor={direccion?.colonia ? colonia : colonia } 
                handleChange= {handleInputChange}  
            />
             <InputForm
                tipo="text" 
                nombre= "telefono" 
                placeholder="Telefono" 
                valor={direccion?.telefono ? telefono : telefono }  
                handleChange= {handleInputChange}  
            />
            <BotonSubmit value="Guardar"  />
            <div className="direccion-actions">
                <div className="enlace-form" onClick={() => history.goBack()}>
                    Cancelar
                </div>
                <div className="enlace-form" onClick={getCoordsAndShow} >
                    Mostrar
                </div >
                
            </div>

            {/* <Link to="/mis-direcciones" className="enlace-form">
               
            </Link> */}
            </Form>

            <Modal setMostrar={setMostrar} mostrar = {mostrar}  headerText ="Ubicación 1">
                 <MapView lat ={coords.lat} lng= {coords.lng}/>
            </Modal>
           
        </div>
    );
}

export default DireccionPage;
