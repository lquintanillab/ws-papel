import React,{ useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../../config/firebaseConfig';
import { iniciarVaciarCarrito } from '../../../actions/carrito';




const ConfirmacionPage = () => {



    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch();


    useEffect(() => {
        const validarPedido = async ()=>{

            const pedidoFb = await db.collection('pedidos').where("userId","==", authState.uid ).where("estado", "==", "PENDIENTE_PAGO").get()
            console.log("Desde validar pedido");
            if(pedidoFb.docs.length > 0){
                const pedidoSnap = await pedidoFb.docs[0];
                const pedidoRef = pedidoSnap.ref;
                pedidoRef.update({estado: "PAGADO"})
                console.log(pedidoRef);
                //pedidoRef.delete();
            } 
        }
        const vaciarCarrito = () =>{
            dispatch(iniciarVaciarCarrito(authState.uid));
        }      
        validarPedido()
        vaciarCarrito();
    }, [authState]);

    return (
        <div>
        <h1>Confirmacion Page</h1>
        </div>
    );
}

export default ConfirmacionPage;
