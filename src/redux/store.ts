import { applyMiddleware, createStore, Store, } from 'redux';
import { ClassesManagerState } from './class_manager_state';
import createSagaMiddleware, { SagaMiddleware, Task } from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { classesManagerSaga } from './sagas'
import rootReducers from './reducer';

export interface SagaStore extends Store {
    sagaTask?: Task;
}
const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}
const persistedReducer: any = persistReducer(persistConfig, rootReducers)

const bindMiddleware = (middleware: Array<SagaMiddleware>) => {
    // if (process.env.NODE_ENV !== 'production') {
    //     const { composeWithDevTools } = require('redux-devtools-extension')
    //     return composeWithDevTools(applyMiddleware(...middleware))
    // }
    return applyMiddleware(...middleware)
}

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    // const isServer = typeof window === 'undefined';
    const store = createStore<ClassesManagerState, any | any, any, any>(persistedReducer, bindMiddleware([sagaMiddleware]));
    let persistor = persistStore(store)

    // (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)
    sagaMiddleware.run(classesManagerSaga);
    return { store, persistor }
}



export { makeStore };