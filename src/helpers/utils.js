
import tacuba from '../assets/tacuba.jpeg';
import calle4 from '../assets/calle-4.jpeg';
import andrade from '../assets/dr-andrade.png';
import cinco from '../assets/5-febrero.jpeg';

export const links = [
    {ruta:'/nosotros', nombre:'Nosotros'},
    {ruta:'/catalogo',nombre:'Productos'},
    {ruta:'/servicios',nombre:'Servicios'},
    {ruta:'/sucursales',nombre:'Sucursales'},
    {ruta:'/precios',nombre:'Precios'},
    {ruta:'contacto',nombre:'Contacto'}, 
   
]

export const sucursales = {
    tacuba: {
        nombre: "Tacuba",
        imagen: tacuba,
        direccion: {
            calle:"Biologo Maximino Martinez",
            numero:"3902",
            colonia:"San Salvador Xochimanca",
            cp: "02870",
            ciudad:"Ciudad de México",
            alcaldia: "Azcapotzalco"

        },
        telefono:"",
        email:"tacuba@papelsa.com.mx",
        celular: "",
        latitud:"19.461878",
        longitud:"-99.176307"
    },
    calle4: {
        nombre: "Calle 4",
        imagen: calle4,
        direccion: {
            calle:"Calle 4",
            numero:"194-A",
            colonia:"Granjas San Antonio",
            cp: "09070",
            ciudad:"Ciudad de México",
            alcaldia: "Iztapalapa"

        },
        telefono:"Ciudad de México",
        email:"calle4@papelsa.com.mx",
        celular: "",
        latitud:"19.6618431",
        longitud:"-99.07873250000002"
    },
    andrade: {
        nombre: "Dr. Andrade",
        imagen: andrade,
        direccion: {
            calle:"Dr. Andrade",
            numero:"78 y 84",
            colonia:"Doctores",
            cp: "06720",
            ciudad:"Ciudad de México",
            alcaldia: ""

        },
        telefono:"Ciudad de México",
        email:"calle4@papelsa.com.mx",
        celular: "",
        latitud:"19.420278",
        longitud:"-99.147742"
    },
    bolivar: {
        nombre: "Bolivar",
        direccion: {
            calle:"Bolivar",
            numero:"98-D",
            colonia:"Centro",
            cp: "06080",
            ciudad:"Ciudad de México",
            alcaldia: "Cuahutemoc"

        },
        telefono:"",
        email:"calle4@papelsa.com.mx",
        celular: "",
        latitud:"19.427712",
        longitud:"-99.141328"
    },
    cincoDeFebrero: {
        nombre: "5 de Febrero",
        imagen: cinco,
        direccion: {
            calle:"5 de Febrero",
            numero:"78",
            colonia:"Obrera",
            cp: "06800",
            ciudad:"Ciudad de México",
            alcaldia: ""

        },
        telefono:"",
        email:"cincodefebrero@papelsa.com.mx",
        celular: "",
        latitud:"19.4745854",
        longitud:" -99.1497772"
    }
}

export const numberFormat = (value) =>{

  let number = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(value)

  

  if(number === '$NaN'){
      number = '$0.00'
  }

  return number

};