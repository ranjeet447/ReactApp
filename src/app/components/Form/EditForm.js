import React from 'react';
import {withRouter} from 'react-router';

import style from './style.css'
import axios from 'axios';


export class EditForm extends React.Component {
  constructor(props) {
    super();
    var id =this.params
    this.state = {
        id:props.id,
        name:props.name,
        email: props.email,
        phone:props.phone
    };
    console.log("p",id)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.table(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    const { id,name, email, phone } = this.state;

    axios.patch(`/patients/${id}`, {id,name, email, phone})
      .then((res) => {
        console.log(res)
        alert("Saved");
        window.location = "/dashboard";
      })
      .catch(()=>{
        alert("Somthing went wrong");
      });
  }

  render() {
    const {id,name, email, phone} = this.state;
    return (
      <div style={style.form}>
          <form onSubmit={this.onSubmit} >
            <h1 className="text-center">Edit</h1><hr/>
            <div className="form-group form-element">
                <label htmlFor="id">Id</label><br/>
                <input type="number" name="id" className="form-control" value={id} disabled/>
            </div>
            <div className="form-group form-element">
                <label htmlFor="name">Name</label><br/>
                <input type="text" name="name" className="form-control" value={name} onChange={this.onChange} autoFocus required/>
            </div>
            <div className="form-group form-element">
                <label htmlFor="email">Email address</label><br/>
                <input type="email" name="email" className="form-control" value={email} onChange={this.onChange} required/>
            </div>
            <div className="form-group form-element">
                <label htmlFor="phone">Phone</label><br/>
                <input type="text" name="phone" className="form-control" value={phone} onChange={this.onChange} required/>
            </div>
            <button type="submit" className="btn btn-primary form-control">Save</button>
          </form>
      </div>
    );
  }
}
export default withRouter(EditForm) ;