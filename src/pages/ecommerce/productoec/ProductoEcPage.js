import React from 'react';

import './ProductoEcPage.css'
import '../../../components/InputForm/InputForm'

const ProductoEcPage = ({producto}) => {
    return (
        <div className={"producto-page"}>
        <div className={"details"}>
           {/* <img src={`${producto.imagen}`} /> */}
          <div className={"details-child"}>
            <h1>{producto.descripcion}</h1>
            <p>{producto.clave}</p>
            <div className={"price-wrapper"}>
                <em>${producto.precio}</em>
               {/*  <button >+</button> */}
            </div>
          </div> 

        </div>
        <div className="description">
          {/* <p>{book.description}</p> */}
          <InputForm 
                  tipo="text" 
                  nombre= "nombre" 
                  placeholder="Nombre"  
                 /*  handleChange= {handleInputChange} */
                  
                />
        </div>
      </div>
    );
}

export default ProductoEcPage;
