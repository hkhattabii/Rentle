import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import GuarantorP from './pages/GuarantorP'
import LeaseP from './pages/LeaseP'
import OccupantP from './pages/OccupantP'
import PropertyP from './pages/PropertyP'

export default function Routes() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/properties" />} />
                <Route exact path="/properties" component={PropertyP} />
                <Route exact path="/guarantors" component={GuarantorP} />
                <Route exact path="/occupants" component={OccupantP} />
                <Route exact path="/leases" component={LeaseP} />
            </Switch>
        </BrowserRouter>
    )
}
