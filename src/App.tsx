import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Toast from './components/Toast/toast'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/toast" component={Toast} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App

