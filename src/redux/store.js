import { createStore } from 'redux';
import photoReducer from './reducer';

const photoStore = createStore(photoReducer);

export default photoStore;
