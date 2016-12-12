import React from 'react';
import ReactDom from 'react-dom';
import Ecommerce from './components/ecommerce';
import route from './modules/route';

console.log(route(undefined, { type: 'XXX' }));
console.log(route('catalog', { type: 'SET_ROUTE', route: 'cart' }));

ReactDom.render(<Ecommerce />, document.getElementById('app'));
