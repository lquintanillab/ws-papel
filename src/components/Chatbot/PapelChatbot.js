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
            message: "¡ Hola {previousValue}!, ¿ Me puedes proporcionar tu email ?",
            trigger: "emailCliente"
        },
        {
          id: "emailCliente",
          user: true,
          trigger: "solicitud-informacion-tel"
        },
        {
          id:'solicitud-informacion-tel',
          message:"¿Cual es tu teléfono?",
          trigger: "telCliente"
        },
        {
          id: "telCliente",
          user: true,
          trigger: "preguntaTema"
        },
        {
          id:'preguntaTema',
          message:"¿ En que te puedo ayudar ?",
          trigger: "opciones1"
        },
        {
          id: "opciones1",
          options: [
              { value: 'comprar', label: 'Comprar un Papel', trigger: "compra" },
              { value: 'informacion', label: 'Informacion', trigger: "informacion" },
              { value: 'queja', label: 'Queja/ Reclamacion', trigger: "queja"},
            ],
        },
        {
          id:'queja',
          message:"¿ Me puedes indicar cual es tu queja ?",
          trigger: "asunto-queja"
        },
        {
          id:'informacion',
          message:"¿ Me puedes indicar que información necesitas ?",
          trigger: "asunto-compra"
        },
        {
          id:'compra',
          message:"¿ Me puedes indicar que papel quieres comprar ?",
          trigger: "asunto-informacion"
        },
        {
          id: "asunto-queja",
          user: true,
          trigger: "final-queja"
        },
        {
          id: "asunto-compra",
          user: true,
          trigger: "final-compra"
        },
        {
          id: "asunto-informacion",
          user: true,
          trigger: "final-informacion"
        },
        {
            id:"final-queja",
            message: "Lamento el inconveniente, En un momento un ejecutivo se comunicará contigo para darte una solución",
            end: true
        },
        {
          id:"final-compra",
          message: "Gracias!, En un momento un ejecutivo se comunicará contigo.",
          end: true
        },
        {
          id:"final-informacion",
          message: "Gracias!, En un momento un ejecutivo se comunicará contigo para propocionarte la información.",
          end: true
      }
      ];

      const uiState = useSelector(state => state.ui);
      
      const {contact} = uiState;

      const dispatch = useDispatch()

      const handleEnd = ({ values }) => {

          let datos = {
            nombre: values[0],
            email: values[1],
            telefono: values[2],
            tipo:values[3],
            asunto: values[4]
          }
       
         db.collection('informacion').add({...datos, estado: 'PENDIENTE'}).then(()=>{
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
