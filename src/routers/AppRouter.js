import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import MainLayout from '../components/layout/MainLyout/MainLayout';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import ContactoPage from '../pages/contacto/ContactoPage';
import HomePage from '../pages/home/HomePage'
import NosotrosPage from '../pages/nosotros/NosotrosPage';
import PreciosPage from '../pages/precios/PreciosPage';
import SucursalPage from '../pages/sucursal/SucursalPage';
import SucursalesPage from '../pages/sucursales/SucursalesPage';
import ScrollTop from './ScrollTop';
import { firebase } from '../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth';
import { loadDescuentos } from '../actions/descuentos';
import PublicRoute from './PublicRoute'; 
import PrivateRouteLayout from './PrivateRouteLayout';
import CuentaPage from '../pages/cuenta/CuentaPage';
import PublicRouteLayout from './PublicRouteLayout';
import ServiciosPage from '../pages/servicios/ServiciosPage';

import PerfilPage from '../pages/cuenta/PerfilPage';
import MiPedidoPage from '../pages/cuenta/MiPedidoPage';
import MisPedidosPage from '../pages/cuenta/MisPedidosPage';
import MisDireccionesPage from '../pages/cuenta/MisDireccionesPage';
import { startLoadingProfile } from '../actions/profile';
import DireccionPage from '../pages/cuenta/DireccionPage';
import UsoPage from '../pages/ecommerce/uso/UsoPage';

import ClasificacionesPage from '../pages/ecommerce/clasificaciones/ClasificacionesPage';
import ProductosPage from '../pages/ecommerce/productos/ProductosPage';
import CarritoPage from '../pages/ecommerce/carrito/CarritoPage'
import CheckoutPage from '../pages/ecommerce/checkout/CheckoutPage';
import BuscadorPage from '../pages/ecommerce/buscador/BuscadorPage';
import BuscadorTextPage from '../pages/ecommerce/buscador/BuscadorTextPage';
import BuscadorFilterTextPage from '../pages/ecommerce/buscador/BuscadorFilterTextPage';
import { loadProductos } from '../actions/productos';
import ConfirmacionPage from '../pages/ecommerce/confirmacion/ConfirmacionPage';
import LoadingIndicator from '../components/layout/Loading/LoadingIndicator';
import {db} from '../config/firebaseConfig';
import { loadCarrito } from '../actions/carrito';



const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setchecking] = useState(true);
    const [loggedIn, setloggedIn] = useState(false);
    const carritoState = useSelector(state => state.carrito)
  

    useEffect(()=>{
       
        firebase.auth().onAuthStateChanged((user)=>{  
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                dispatch(startLoadingProfile(user.uid));
                setloggedIn(true);    
            }else{
                setloggedIn(false);
            }
            setchecking(false);   
        });

    },[]);


    useEffect(()=>{
        const cargarProductos = async ()=>{
            //const res = await axios.get(`http://localhost:4000/productos`);
            //http://api.papelsa.mobi:8000;
            //const res = await axios.get(`http://localhost:8000/api/productos-ecommerce`);
            const res = await axios.get(`http://api.papelsa.mobi:8000/api/productos-ecommerce`);
            dispatch(loadProductos(res.data)) ;
        }
        const cargarDescuentos = async ()=>{
            //const res = await axios.get(`http://localhost:4000/descuentos`);
            //const res = await axios.get(`http://localhost:8000/api/descuentos`);
            const res = await axios.get(`http://api.papelsa.mobi:8000/api/descuentos`);
            dispatch(loadDescuentos(res.data)) ;
        }
        cargarProductos();
        cargarDescuentos();
        return () =>{
            
            alert("Estoy saliendo")
        }
        
    },[])

    useEffect(()=>{
        
    
        if(loggedIn && carritoState.userId !== ""){
            db.collection('carritos').doc(carritoState.userId).get().then(doc =>{
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    console.log(carritoState);
                    if(carritoState.productos.length > 0 ){
                        db.collection('carritos').doc(carritoState.userId).set(carritoState).then().catch(error => {
                            console.log("Sucedio un error al actualizar el carrito en Firebase");
                        })
                    }
                    if(carritoState.productos.length === 0 && doc.data().productos.length > 0 ){
                      dispatch(loadCarrito(doc.data()))
                    }
                } else {
                    db.collection('carritos').doc(carritoState.userId).set(carritoState).then().catch(error => {
                        console.log("Hubo un error al crear el carrito en Firebase!!!");
                    })
                }
            })
        }


        
        
    },[carritoState, loggedIn])




    if(checking){
        return(
            <LoadingIndicator />
            )
    }

    return (
        <Router>
            
             <ScrollTop />
             
          
            <div>
                
                <Switch>
                 
                    <Route 
                        exact path="/" 
                        component={ HomePage }
                    />
                     <Route 
                        exact path="/nosotros" 
                        component={ NosotrosPage }
                    />
                     <Route 
                        exact path="/contacto" 
                        component={ ContactoPage }
                    />
                     <Route 
                        exact path="/sucursales" 
                        component={ SucursalesPage }
                    />
                    <Route 
                        exact path="/sucursal/:id" 
                        component={ SucursalPage }
                    />
                    <Route 
                        exact path="/precios" 
                        render = {() => (
                            <MainLayout>
                                <PreciosPage />
                            </MainLayout>
                        )}
                    />
                    <Route 
                        exact path="/servicios" 
                        render = {() => (
                            <MainLayout>
                                <ServiciosPage />
                            </MainLayout>
                        )}
                    />
                    <Route 
                        exact path="/catalogo" 
                        render = {() => (
                            <MainLayout>
                                <UsoPage/>
                            </MainLayout>
                        )}
                    />
                    <Route 
                        exact path="/clasificaciones" 
                        render = {() => (
                            <MainLayout>
                                <ClasificacionesPage/>
                            </MainLayout>
                        )}
                    />
                    <Route 
                        exact path="/carrito" 
                        render = {() => (
                            <MainLayout>
                                <CarritoPage/>
                            </MainLayout>
                        )}
                    />
                    <Route 
                        exact path="/productos" 
                        render = {() => (
                            <MainLayout>
                                <ProductosPage/>
                            </MainLayout>
                        )}
                    />
                    <Route 
                        exact path="/buscador" 
                        render = {() => (
                            <MainLayout>
                                <BuscadorPage/>
                            </MainLayout>
                        )}
                    />
                    <Route 
                        exact path="/buscador2" 
                        render = {() => (
                            <MainLayout>
                                <BuscadorTextPage />
                            </MainLayout>
                        )}
                    />
                     <Route 
                        exact path="/buscador3" 
                        render = {() => (
                            <MainLayout>
                                <BuscadorFilterTextPage />
                            </MainLayout>
                        )}
                    />
                    <PublicRoute 
                        exact path="/login" 
                        component={ LoginPage }
                        isAuthenticated= {loggedIn}
                    />
                    <PublicRouteLayout
                        exact path="/register" 
                        component={ RegisterPage }
                        isAuthenticated= {loggedIn}
                    />
                    <Route 
                        exact path="/reset-password" 
                        render = {() => (
                            <MainLayout>
                                <ResetPasswordPage/>
                            </MainLayout>
                        )}
                    />
                    <PrivateRouteLayout
                        path='/mi-cuenta'
                        component = {CuentaPage}
                        isAuthenticated= {loggedIn}      
                    />

                    <PrivateRouteLayout
                        path='/mi-perfil'
                        component = { PerfilPage }
                        isAuthenticated= {loggedIn}      
                    />

                    <PrivateRouteLayout
                        path='/mi-pedido'
                        component = { MiPedidoPage }
                        isAuthenticated= {loggedIn}      
                    />
                    <PrivateRouteLayout
                        path='/mis-pedidos'
                        component = { MisPedidosPage }
                        isAuthenticated= {loggedIn}      
                    />

                    <PrivateRouteLayout
                        path='/mis-direcciones'
                        component = { MisDireccionesPage }
                        isAuthenticated= {loggedIn}      
                    />

                    <PrivateRouteLayout
                        path='/add-direccion/:id'
                        component = { DireccionPage }
                        isAuthenticated= {loggedIn}      
                    />
                    <PrivateRouteLayout
                        path='/checkout'
                        component = {CheckoutPage}
                        isAuthenticated= {loggedIn}      
                    />
                    <PrivateRouteLayout
                        path='/confirmacion'
                        component = {ConfirmacionPage}
                        isAuthenticated= {loggedIn}      
                    />
                    


                   
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
