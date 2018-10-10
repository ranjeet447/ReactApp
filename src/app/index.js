
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route,browserHistory,Switch} from 'react-router-dom';

import {Header} from './components/Header/Header';
import {Home} from  './components/Home/Home';
import {Root} from './components/Root/Root';
import {Dashboard} from './components/Dashboard/Dashboard'
import {Add} from './components/Add/Add'
import {Edit} from './components/Edit/Edit'

class App extends React.Component{
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <div>
                    <Header/>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route  path={"/home"} component={Home}/>
                        <Route  path={"/dashboard"} component={Dashboard}/>
                        <Route  path={"/add"} component={Add}/>
                        <Route  path={"/edit"} component={Edit}/>
                    </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}; 

render(<App />, window.document.getElementById("app"));