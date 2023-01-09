import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../../config/firebaseConfig';
import { iniciarVaciarCarrito } from '../../../actions/carrito';
//import axios from 'axios';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';


// http://localhost:3000/#/confirmacion?pedido=NiDNANCYRgRJrOhT7HZL
 

const ConfirmacionPage = () => {

    //const url = `http://api.papelsa.mobi:8000/get-session/${}`;
    let location = useLocation();
    const   query = queryString.parse(location.search)

    //console.log(query.pedido);

        
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const [pedido, setPedido] = useState(null);


    useEffect(() => {
        const validarPedido = async ()=>{

             const pedidoFb = await db.collection("pedidos").doc(query.pedido)
  
            if(pedidoFb !== undefined
                
                ){
                //const pedidoSnap = await pedidoFb.get();
                const pedidoRef = pedidoFb ;
                pedidoRef.update({estado: "PAGADO"})
                let pedidoAct = await (await db.collection("pedidos").doc(query.pedido).get()).data()  
                /* console.log("-----------------------------------");
                console.log(pedidoAct);
                console.log("-----------------------------------"); */
                setPedido(pedidoAct);
                //pedidoRef.delete();
            } 
        }
        const vaciarCarrito = () =>{
            dispatch(iniciarVaciarCarrito(authState.uid));
        }      
        validarPedido()
        vaciarCarrito();
    }, [authState,dispatch,query.pedido]);

    return (
        <div>
          <h1 className="titulo-uso">Gracias por tu pedido !!!</h1>
          <div className="pedido-confirmacion">
              <header className ="confirmacion-header">
                  <p>Hemos recibido tu pedido</p>
                  <p>Numero de pedido: {pedido ? pedido.folio : null} </p>

                  {JSON.stringify(pedido)}
              </header>
              <section>
                  <p>Rastreo pedido</p>
              </section>
              <section>
                  <p>Envio:</p>
              </section>
              <section>
                  <p>Envio:</p>
              </section>
              <footer className= "confirmacion-footer"></footer>
          </div>
        
        
        </div>
    );
}

export default ConfirmacionPage;
