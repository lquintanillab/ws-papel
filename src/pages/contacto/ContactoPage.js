import React from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
import {db} from '../../config/firebaseConfig'

import BarraPrincipal from '../../components/layout/BarraPrincipal/BarraPrincipal';
import bannerContacto from '../../assets/banner_contacto.jpeg'
import bannerServicios from '../../assets/banner_servicios.jpeg'
import FooterPrincipal from '../../components/layout/FooterPrincipal/FooterPrincipal';
import Form from '../../components/Form/Form';
import BotonSubmit from '../../components/BotonSubmit/BotonSubmit';
import InputForm from '../../components/InputForm/InputForm';
import ContenedorSeccion from '../../components/layout/ContenedorSeccion/ContenedorSeccion';
import ContenedorItems from '../../components/layout/ContenedorItems/ContenedorItems';
import ContenedorItemTexto from '../../components/layout/ContenedorItems/ContenedorItemTexto';

import './ContactoPage.css';

import { useForm } from '../../hooks/useForm'

const ContactoPage = () => {

    let contacto = {
        nombre: '',
        email:'',
        telefono:'',
        empresa:'',
        puesto:'',
        asunto:''
    }

    let history = useHistory();

    const [valueForms, handleInputChange] = useForm(contacto)

    const onSubmit = (e) => {
        e.preventDefault();
       
        db.collection('informacion').add({...valueForms, estado: 'PENDIENTE'}).then(()=>{
            Swal.fire(
                '¡Gracias!',
                'En un momento nos comunicamos contigo',
                'success'
              ).then(()=>{
                history.push("/catalogo");
              })
        })         
    }

/*     <InputForm
    tipo="text" 
    nombre= "alias" 
    placeholder="Alias"
    valor={direccion?.alias ? alias : alias }  
    handleChange= {handleInputChange}  
/> */

    return (
        <div>
            <BarraPrincipal show={ true } />
                <div className="contacto-contenedor">
                  
                    <div className="formulario">
                        <img className="banner-contacto"  src={bannerServicios} alt = "bannerServicios"/>
                        <Form encabezado= "Escribenos" handleSubmit={onSubmit}>
                            <InputForm 
                                tipo="text" 
                                nombre= "nombre" 
                                placeholder="Nombre"  
                                handleChange= {handleInputChange}
                             />
                             
                              <InputForm 
                                tipo="email" 
                                nombre= "email" 
                                placeholder="E-mail"  
                                handleChange= {handleInputChange}
                             />
                             <InputForm 
                                tipo="tel" 
                                nombre= "telefono" 
                                placeholder="Telefono"  
                                handleChange= {handleInputChange}
                             />

                              <InputForm 
                                tipo="text" 
                                nombre= "empresa" 
                                placeholder="Empresa"  
                                handleChange= {handleInputChange}      
                             />
                             <InputForm 
                                tipo="text" 
                                nombre= "puesto" 
                                placeholder="Puesto"  
                                handleChange= {handleInputChange}
                                
                             />
                             <InputForm 
                                tipo="text" 
                                nombre= "asunto" 
                                placeholder="Asunto"  
                                handleChange= {handleInputChange}
                                
                             />
                            <BotonSubmit value="Enviar"  />
                        </Form>
                        <img className="banner-contacto" src={bannerContacto} alt = "bannerContacto"/>
                    </div>
                    
                    <ContenedorSeccion titulo="También nos puedes contactar llamando a tu sucursal más cercana." >
                        <ContenedorItems >
                            <ContenedorItemTexto 
                                nombre="Tacuba" 
                                descripcion="Biólogo Maximino Martínez 3902
                                Col. San Salvador Xochimanca C.P. 02870 México, D.F.
                                (a la altura de Av. Cuitláhuac 2500)
                                Tel./Fax: 2465 0399
                                e-mail ventas@papelsa.com.mx" 
                            />
                           
                            <ContenedorItemTexto 
                                nombre="Bolivar"
                                descripcion="Bolívar 95-D
                                Col. Centro
                                C.P. 06080, México, D.F.
                                Tel. / Fax 5709 2022
                                e-mail sucbolivar@papelsa.com.mx
                                "
                            />
                            
                            <ContenedorItemTexto 
                                nombre="Calle 4"
                                descripcion="Calle 4 No. 194-A
                                Col. Granjas San Antonio
                                C.P. 09070, México, D.F.
                                Tel. / Fax 5685 3176
                                e-mail calle4@papelsa.com.mx"
                            />
                            
                            <ContenedorItemTexto 
                                nombre="Andrade"
                                descripcion="Dr. Andrade 78 y 84
                                Col. Doctores
                                C.P. 06720, México D.F.
                                Tel. / Fax 5578 7400
                                e-mail sucandrade@papelsa.com.mx"
                            />
                            
                            <ContenedorItemTexto 
                                nombre="5 de Febrero"
                                descripcion="5 de Febrero No. 378
                                Col. Obrera
                                C.P. 06800 México, D.F.
                                Tel./Fax 5740 7777
                                e-mail cincodefebrero@papelsa.com.mx"
                            />
                            
                            <ContenedorItemTexto nombre="Vertiz 176">
                            </ContenedorItemTexto>
                      
                            <ContenedorItemTexto 
                                nombre="Queretaro" 
                                descripcion="Biólogo Maximino Martínez 3902
                                Col. San Salvador Xochimanca C.P. 02870 México, D.F.
                                (a la altura de Av. Cuitláhuac 2500)
                                Tel./Fax: 2465 0399
                                e-mail ventas@papelsa.com.mx" 
                            />
                           <ContenedorItemTexto 
                                nombre="Callcenter"
                                descripcion="Bolívar 95-D
                                Col. Centro
                                C.P. 06080, México, D.F.
                                Tel. / Fax 5709 2022
                                e-mail sucbolivar@papelsa.com.mx
                                "
                            />
                            <ContenedorItemTexto 
                                nombre="Leon"
                                descripcion="Bolívar 95-D
                                Col. Centro
                                C.P. 06080, México, D.F.
                                Tel. / Fax 5709 2022
                                e-mail sucbolivar@papelsa.com.mx
                                "
                            />
                        </ContenedorItems>
                        <Link to="/sucursales" className="link-sucursales">
                            {"Conoce nuestras sucursales ..."}
                        </Link>
                    </ContenedorSeccion>
                  
                    
                        
                       
                </div>
            <FooterPrincipal/>
        </div>
    );
}

export default ContactoPage;
