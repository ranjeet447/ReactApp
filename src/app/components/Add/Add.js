import React from 'react';

import {AddForm} from '../Form/AddForm'


export class Add extends React.Component {

    render(){
       console.log("Add",this.props);
        return(
            <div className="container">
                <div className="row">
                   <div className="col-md-6 col-md-offset-3">
                       <AddForm/>
                   </div>
                </div>
            </div>
        );
    }
}


