import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootLiveGameModule from './modules/livegame/src';
import { makeStore } from './redux/store';
import {
    BrowserRouter as Router, useHistory
} from "react-router-dom";
const store = makeStore();

ReactDOM.render(
    <Router basename="/livegame">
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <RootLiveGameModule
                    oldSystemUser={{
                        account: "kien1712111",
                        name: "hàng cũ nhưng đẹp trai"
                    }}
                />
            </PersistGate>
        </Provider>
    </Router>
    ,
    document.getElementById("livegame"));


export const initDeothetinduoc = (props: any) => {
    console.log("PROPS TRUYỀN SANG ĐÂY LÀY: ", props);

    ReactDOM.render(
        <Router basename="/livegame">
            <Provider store={store.store}>
                <PersistGate loading={null} persistor={store.persistor}>
                    <RootLiveGameModule
                        oldSystemUser={props}
                    />
                </PersistGate>
            </Provider>
        </Router>
        ,
        document.getElementById("livegame"));
}