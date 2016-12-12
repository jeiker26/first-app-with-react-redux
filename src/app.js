import React from 'react';
import ReactDom from 'react-dom';
import Ecommerce from './components/ecommerce';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

window.store = store;

ReactDom.render(
    <Provider store={ store }>
        <Ecommerce />
    </Provider>
    , document.getElementById('app'));
