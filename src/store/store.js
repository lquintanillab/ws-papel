import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { carritoReducer } from '../reducers/carritoReducer';
import { profileReducer } from '../reducers/profileReducer';
import { uiReducer } from '../reducers/uiReducer';
import { descuentosReducer } from '../reducers/descuentosReducer';
import { productosReducer } from '../reducers/productosReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    ui: uiReducer,
    carrito: carritoReducer,
    descuentos: descuentosReducer,
    productos: productosReducer
})


export const store = createStore(
    reducers,
    composeEnhancers(
            applyMiddleware(thunk)
        )
    );