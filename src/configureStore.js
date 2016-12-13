import { createStore, combineReducers } from 'redux';
import route from './modules/route';
import catalog from './modules/catalog';
import cart from './modules/cart';

export default function configureStore() {
    const appReducer = combineReducers({
        route,
        catalog,
        cart
    });

    return createStore(appReducer);
}