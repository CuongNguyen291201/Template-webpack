import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootLiveGameModule from './modules/livegame/src';
import { makeStore } from './redux/store';
const store = makeStore();

ReactDOM.render(
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
    ,
    document.getElementById("livegame"));
// export const initDeothetinduoc = (props: any) => {
//     console.log("ADSFASDFASDFASDFAS", props);

//     ReactDOM.render(
//         <App data={props} />,
//         document.getElementById("livegame"));
// }