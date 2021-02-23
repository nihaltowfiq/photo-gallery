import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import photoReducer from './reducer';

const photoStore = createStore(photoReducer, applyMiddleware(thunk));

export default photoStore;
