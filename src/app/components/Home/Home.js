import React from 'react';

import {LoginForm} from './../Form/LoginForm'


export class Home extends React.Component {

    render(){
        return(
            <div className="container">
                <div className="row">
                   <div className="col-md-6 col-md-offset-3">
                       <LoginForm/>
                   </div>
                </div>
            </div>
        );
    }
}


