 
    export const reasignarFiltros = (productos,seleccion= '',valor = '',selectorGroup) => {   
        let newProds = []
        switch(seleccion){
            case '':
                newProds = productos
                break;
            case 'uso':
                if(valor === ''){
                    newProds = productos
                    break;
                }
                newProds = productos.filter( producto =>  producto.uso=== valor)
                break;
            case 'clasificacion':
                if(valor === '' && selectorGroup.uso !== ''){
                    newProds = productos.filter( producto =>  producto.uso=== selectorGroup.uso)
                    break;
                }
                if(valor === '' && selectorGroup.uso === ''){
                    newProds = productos
                    break;
                }
                newProds = productos.filter( producto =>  producto.clasificacion2 === valor)
                break;
            default:
                break
        }

      
        const newClasificaciones = [...new Set( newProds.map(producto => producto.clasificacion2) )]
        const newMedidas = [...new Set( newProds.map(producto => producto.medida) )]
        const newGramajes = [...new Set( newProds.map(producto => producto.gramos) )]
        const newPuntos = [...new Set( newProds.map(producto => producto.puntos) )]
        const newCalibres = [...new Set( newProds.map(producto => producto.calibre) )]
        const newTipos = [...new Set( newProds.map(producto => producto.tipo) )]
     
        return {
            newClasificaciones,
            newMedidas,
            newGramajes,
            newPuntos,
            newCalibres,
            newTipos
        }
    
    }

    export const buscarProductos = (productos, busqueda) =>{
        //console.log(busqueda);
        let newProds = productos;
        if(busqueda.uso !== ""){
            newProds = newProds.filter(producto => producto.uso === busqueda.uso )
        }
        if(busqueda.clasificacion !== ""){
            newProds = newProds.filter(producto => producto.clasificacion2 === busqueda.clasificacion )
        }
         if(busqueda.medida !== ""){
            newProds = newProds.filter(producto => producto.medida === busqueda.medida )
        }
        if(busqueda.gramaje !== ""){
            newProds = newProds.filter(producto => producto.gramos === busqueda.gramaje )
        }
        if(busqueda.puntos !== ""){
            newProds = newProds.filter(producto => producto.puntos === busqueda.puntos )
        }
        if(busqueda.calibre !== ""){
            newProds = newProds.filter(producto => producto.calibre === busqueda.calibre )
        }
        if(busqueda.tipo !== ""){
            newProds = newProds.filter(producto => producto.tipo === busqueda.tipo )
        }
        return  newProds;
    }

    export const buscarProductosText = (productos, busqueda) =>{
        const busquedaArray = busqueda.split(" ")
        let productosResp = [] 
        for(let condicion of busquedaArray){
            let prods = productos.filter(producto => producto.tags.includes(condicion.toUpperCase()))
            productosResp = [...new Set([...productosResp, ...prods ])]
        }
        return productosResp
    }

    export const buscarProductosExc = (productos, busqueda) =>{
        const busquedaArray = busqueda.split(" ").filter(elem => elem !== "")
        let productosResp = [] 
        if(busquedaArray.length > 0 ){
            let prods = productos.filter(producto => busquedaArray.every(elem => producto.tags.includes(elem.toUpperCase()) ) );
            productosResp = [...new Set([...prods ])]
        }
        return productosResp
    }
