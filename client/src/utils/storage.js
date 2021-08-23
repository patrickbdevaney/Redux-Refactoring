import {createStore} from 'redux';
import reducers from './reducers';

const state = {
products: [],
cart: [],
cartOpen: false,
categories: [],
currentCategory: '',
};

const storage = createStore(reducers, state);


export default storage;