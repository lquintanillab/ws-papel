import React from 'react';
import {Route, Redirect,useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';


const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {


  let location = useLocation();
  
 
/* 
  if(location.state !== undefined){
    let {from} = location.state
  
  }else{
   

  } */
  

   
      
    

    return (
      <Route  {...rest}
      component= {(props) =>(
        (!isAuthenticated)
            ? (<Component {...props} />)
              :(location.state === undefined)
                ? (<Redirect to='/catalogo'/>)
                : (<Redirect to={location.state.from.pathname}/>)
    )}
      />
    );
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

export default PublicRoute;


