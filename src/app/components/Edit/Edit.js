import React from 'react';

import {EditForm} from './../Form/EditForm'


export class Edit extends React.Component {

    render(){
        console.log(this.props)
        var id = this.props.location.state.id;
        var name= this.props.location.state.name;
        var email = this.props.location.state.email;
        var phone = this.props.location.state.phone;
        return(
            <div className="container">
                <div className="row">
                   <div className="col-md-6 col-md-offset-3">
                       <EditForm id={id} name={name} email={email} phone={phone}/>
                   </div>
                </div>
            </div>
        );
    }
}


