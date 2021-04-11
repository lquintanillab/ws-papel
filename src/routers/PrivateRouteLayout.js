import React from 'react';
import {Route, Redirect,useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from '../components/layout/MainLyout/MainLayout';


const PrivateRouteLayout = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    let location = useLocation();
    //let history = useHistory();



    return (
      <Route  {...rest}
        render = {(props) => (
            (isAuthenticated)
                ? (<MainLayout>
                        <Component {...props} />
                    </MainLayout>)
                : (<Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                  }}/>)
            
        )}
      />
    );
}

PrivateRouteLayout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

export default PrivateRouteLayout;


