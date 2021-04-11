import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'
import { startLogout } from '../../../actions/auth';

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Link} from 'react-router-dom';
import {links} from '../../../helpers/utils';
import logo from '../../../assets/logo3.png';




import './BarraPrincipal.css'

const BarraPrincipal = ( {show} ) => {
    
    const profileState = useSelector(state => state.profile)
    const carritoState = useSelector(state => state.carrito)

    const dispatch = useDispatch();

    // let isVisible = false

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
   // const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
   // const isPortrait = useMediaQuery({ orientation: 'portrait' })

    const [fixed, setFixed] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useScrollPosition(({ prevPos, currPos }) => {
        setFixed(currPos.y !== 0);
    });

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <>
        <div className={`navbar ${fixed || isTabletOrMobile || show ? 'sticky-fixed' : 'navbar-hiden'}`}>
            <Link to="/"><img src={logo} alt="Logotipo Papel sa" className="logo-papel"></img></Link>
            <div className={`${isTabletOrMobile ? 'icon-bar' : 'navegacion-hide'}`} >
                {
                carritoState.productos?.length > 0
                ?
                    
                    <Link to='/carrito' className="cart position-relative d-inline-flex" >
                        <i className="fas fa fa-shopping-cart fa-lg"></i>
                        <span className="cart-basket d-flex align-items-center justify-content-center">
                            {carritoState.productos.length}
                        </span>
                    </Link>
                :null
                } 
                </div>
            <nav>
                <div className={`${isTabletOrMobile ? 'navegacion-hide' : 'navegacion'}`}>
                    {
                       links.map((link) =>(<li key={link.ruta}><Link className="link" to={link.ruta}>{link.nombre}</Link></li>))  
                    }
                    {
                         profileState?.nombre 
                         ? <li><Link to='/mi-cuenta'>Hola, {profileState.nombre}</Link></li> 
                         : <li><Link to='/login'>Iniciar sesion</Link></li>         
                    }
                    {
                        profileState?.nombre
                        ?<li onClick= {handleLogout}><i className="fas fa-sign-out-alt"></i></li>
                        :null
                    }
                     {
                        carritoState?.productos.length > 0
                        ?<li >
                            <div id="cart" className="d-none">

                            </div>
                            <Link to='/carrito' className="cart position-relative d-inline-flex" >
                                <i className="fas fa fa-shopping-cart fa-lg"></i>
                                <span className="cart-basket d-flex align-items-center justify-content-center">
                                    {carritoState.productos.length}
                                </span>
                            </Link>
                       
                        </li>
                        :null
                    }      
                </div> 
                <div className={`${isTabletOrMobile ? 'icon-bar' : 'navegacion-hide'}`}  onClick={()=>{setShowMenu(!showMenu)}}>
                    <i className="fas fa-bars"></i>
                </div>     
            </nav> 
        </div> 
        
        <div className={`${showMenu && isTabletOrMobile ? 'menu-display' : 'navegacion-hide'}`} onMouseLeave={()=>{setShowMenu(!showMenu)}}>
            <ul>
                { links.map((link) =>(<li key={link.ruta}><Link to={link.ruta}>{link.nombre}</Link></li>)) }
                {
                    profileState?.nombre 
                    ? <li><Link to='/mi-cuenta'>Hola, {profileState.nombre}</Link></li> 
                    : <li><Link to='/login'>Iniciar sesion</Link></li>         
                }
                {
                    profileState?.nombre
                    ?<li onClick= {handleLogout}><i className="fas fa-sign-out-alt"></i>Salir</li>
                    :null
                }
               
            </ul>
        </div>
        </>
    );
}
 
export default BarraPrincipal;