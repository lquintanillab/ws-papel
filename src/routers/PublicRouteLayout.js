import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainLayout from '../components/layout/MainLyout/MainLayout';


const PublicRouteLayout = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

  


    return (
      <Route  {...rest}
      render = {(props) => (
        (!isAuthenticated)
            ? (<MainLayout>
                    <Component {...props} />
                </MainLayout>)
            : (<Redirect to='/login' />)
        
        )}
      />
    );
}

PublicRouteLayout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

export default PublicRouteLayout;


