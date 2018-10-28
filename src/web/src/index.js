import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import { store } from './helpers';
import { App } from './containers/App/App';
import './css/main.css';
//import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker.js';
// setup fake backend
import { configureFakeBackend } from './helpers';
//persist gate
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './helpers'; 

configureFakeBackend();
//const logger = createLogger();
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
registerServiceWorker();


