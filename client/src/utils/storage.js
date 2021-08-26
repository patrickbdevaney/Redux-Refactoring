import {createStore} from 'redux';
import reducers from './reducers';

const state = {
products: [],
cart: [],
cartOpen: false,
categories: [],
currentCategory: '',
};

const store = createStore(reducers, state);


export default store;