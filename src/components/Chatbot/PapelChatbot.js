import React from 'react';
import ChatBot from "react-simple-chatbot";
import { useDispatch, useSelector } from 'react-redux';
import { setContact } from "../../actions/ui"
import { ThemeProvider } from 'styled-components';
import {db} from '../../config/firebaseConfig'
import Swal from 'sweetalert2'

import botImage from  '../../assets/CIRCULO-05.png'

const PapelChatbot = () => {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#F2142B',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#F2142B',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        
      };
    const config = {
        width: "300px",
        height: "400px",
        floating: true, 
        headerTitle:'Papel s.a.' ,
        botAvatar: botImage ,
        enableMobileAutoFocus:true,
        placeholder: 'Escriba su mensaje',
        style:{
          zIndex: 6000
        }
      };
      
    const steps = [
        {
         id: "saludo",
         message: "¡ Hola, Bienvenido a Papel ! ",
         trigger: "pedirNombre"
        },
        {
         id: "pedirNombre",
         message: " ¿ Cual es tu nombre  ?",
         trigger: "nombreCliente"
        },
        {
            id: "nombreCliente",
            user: true,
            trigger: "saludoCliente"
        },
        {
            id: "saludoCliente",
            message: "¡ Hola {previousValue} ! ¿Te interesa ...?",
            trigger: "opciones1"
        },
        {
            id: "opciones1",
            options: [
                { value: 'comprar', label: 'Comprar un Papel', trigger: "pasoFinal" },
                { value: 'informacion', label: 'Informacion', trigger: "pasoFinal" },
                { value: 'queja', label: 'Queja/ Reclamacion', trigger: "pasoFinal" },
              ],
            
        },
        {
            id:"pasoFinal",
            message: "bye",
            end: true
        }
      ];

      const uiState = useSelector(state => state.ui);
      
      const {contact} = uiState;

      const dispatch = useDispatch()

      const handleEnd = ({ values }) => {
       
         db.collection('informacion').add({...values, estado: 'PENDIENTE'}).then(()=>{
          Swal.fire(
              '¡Gracias!',
              'En un momento nos comunicamos contigo',
              'success'
            ).then(()=>{
              dispatch(setContact())
              //history.push("/catalogo");
            })
      })   
        // 
       // alert(`Chat handleEnd callback! Number: ${values}`);
      }

    return (
        
        <ThemeProvider theme={theme}>
           {!contact ? <ChatBot handleEnd= {handleEnd}  steps={steps} {...config} /> : null }
      </ThemeProvider>
    );
}

export default PapelChatbot;
