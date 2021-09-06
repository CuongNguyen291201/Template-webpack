import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootLiveGameModule from './modules/livegame/src';
import { makeStore } from './redux/store';
import registerServiceWorker from './registerServiceWorker';
const store = makeStore();
ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <RootLiveGameModule
                oldSystemUser={{
                    account: "kiendeptrai0075",
                    name: "Kiêntest5"
                }}
            />
        </PersistGate>
    </Provider>
    ,
    document.getElementById("livegame"));


export const initDeothetinduoc = (props: any) => {
    console.log("PROPS TRUYỀN SANG ĐÂY LÀY: ", props);
    ReactDOM.render(
        // <Router basename="/livegame">
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <RootLiveGameModule
                    oldSystemUser={props}
                />
            </PersistGate>
        </Provider>
        // </Router>
        ,
        document.getElementById("livegame"));
}
registerServiceWorker();
