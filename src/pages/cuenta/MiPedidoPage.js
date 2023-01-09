import React, { useState, useEffect } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import axios from 'axios';




const MiPedidoPage = (props) => {
   const [fecha, setFecha] = useState();


   const handleChange = (e) =>{
        //console.log(e.target.value);
        setFecha(e.target.value);
   }

   useEffect(() => {
       
    //const url = `http://localhost:4000/productos${location.search}`;
    //const url = `http://localhost:8000/productos?clasificacion2=BOND CORTADOS`;
    const url = `http://localhost:8000/buscar-producto?prod=pol`;
 
   

    const consultarApi = async () =>{

        const data = await axios.get(url)
        
      

       let prods = data.data.map(data => data.fields.clave)
       
       prods.forEach(prod => console.log(prod));

    }
    
    consultarApi();
   }, []);

    return (
        <div>
            <h1>Mi pedido page</h1>
            <h3>{fecha}</h3>
            <input type="date" onChange={handleChange}/>
            {
                //productos.map(producto => <ProductosEcPage key ={producto.id} producto={producto} notify={notify} />) 
            } 
           
            <BackButton />
        </div>
    );
}

export default MiPedidoPage;
