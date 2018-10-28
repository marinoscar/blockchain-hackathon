import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
//redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['masterdata']
};

const pReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);
export const store = createStore(pReducer, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));
export const persistor = persistStore(store);