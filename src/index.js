import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import photoStore from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={photoStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
