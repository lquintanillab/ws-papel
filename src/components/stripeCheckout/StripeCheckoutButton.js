import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import {startGuardarCarrito} from '../../actions/carrito'
import { apiUrl } from '../../config/axiosInstance';
import './StripeCheckoutButton.css'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HxDcrETVsg8OlVD8qYcvt0bhtBihpmPf8k2ie65mHUqf0mmBIiMY8F1qELlDTONhsrN71JO9a7KNC1pirNOD9er00DRQn9xrp');


const StripeCheckoutButton = ({total,desactivado,confirmarPedido}) => {

  const carritoState = useSelector(state => state.carrito);
  const dispatch = useDispatch(startGuardarCarrito(carritoState));

    const handleClick = async (event) => { 
        
        
        dispatch(startGuardarCarrito(carritoState));
        const docSnap = await confirmarPedido();

        // Get Stripe.js instance
        const stripe = await stripePromise;
         const aPagar = (Number(total).toFixed(2))* 100

         const response = await fetch(`${apiUrl.url2}create-checkout-session/`, { 
          method: 'POST',
          body: JSON.stringify({
              summary: 'myName',
              change: aPagar,
              pedido: docSnap.id
            })
       });
       /* const response = await fetch('http://api.papelsa.mobi:8000/create-checkout-session/', { 
          method: 'POST',
          body: JSON.stringify({
              summary: 'myName',
              change: aPagar,
              pedido: docSnap.id
            })
       }); */

        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
      };
    return (
      <button type="button" role="link" className="boton-pagar" onClick={handleClick} disabled={desactivado}>
        Pagar
      </button>
    );
}

export default StripeCheckoutButton;
