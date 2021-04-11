import React from 'react';
import Additem from '../../components/AddItem/Additem';
import BotonLink from '../../components/BotonLink/BotonLink';
import DireccionItem from '../../components/Direccion/DireccionItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { startAddDireccion } from '../../actions/profile';
import Swal from 'sweetalert2'

import './MisDirecciones.css';

const MisDireccionesPage = () => {

    const profileState = useSelector(state => state.profile)

    const dispatch = useDispatch();


    let history = useHistory();

    const handleClickAddItem = (indice = 1000) => {

        history.push(`/add-direccion/${indice}`);
    }

    const handleClickDeleteItem = (id) =>{
        Swal.fire({
            title: `Desea borrar la direccion ${profileState.direcciones[id].alias} ?`,
            text: "Esta accion no  se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: "Cancelar",  
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                profileState.direcciones.splice(id,1)     
                dispatch(startAddDireccion(profileState.uid,profileState.direcciones))
                Swal.fire(
                'Eliminad0!',
                'Su direccion ha sido eliminada.',
                'success'
              )
            }
          })
        
    }


    return (
        <div className="contenedor-mis-direcciones">
            <div className="mis-direcciones-title">
                Mis Direcciones
            </div>
            <div className= "mis-direcciones-items">
                <Additem  icono ="fas fa-plus" texto = "Agregar dirección" funcion= {handleClickAddItem}/> 
                { profileState?.direcciones 
                    ? profileState.direcciones.map((direccion,index) => <DireccionItem key={direccion.alias} direccion = {direccion} index = {index
                    } func={handleClickAddItem}  funcDelete ={handleClickDeleteItem}/>) 
                    : null 
                }
            </div>       
            <div className= "mis-direcciones-footer">
                <BotonLink path="/mi-cuenta" accionBoton="   Regresar   " />  
               
            </div>          
        </div>
    );
}

export default MisDireccionesPage;
