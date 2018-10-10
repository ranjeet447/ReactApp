import React from 'react';

import {Header} from './../Header/Header';
// import {Home} from '../Home';


export class Root extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}; 
