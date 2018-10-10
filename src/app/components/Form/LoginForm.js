import React from 'react';
import  { Redirect } from 'react-router-dom'

import style from './style.css'
import axios from 'axios';


export class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password:'',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.table(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    const { email , password } = this.state;

    axios.post('/api/login', {email,password})
      .then((res) => {
        // console.log(res)
        if(res.data ===false){
          alert('Invalid email or password');
        }
        if(res.data ===true){
          // return <Redirect to='/dashboard '/>
          window.location = "/dashboard";
        }
      });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div style={style.form}>
          <form onSubmit={this.onSubmit} >
            <h1 className="text-center">Log in</h1><hr/>
            <div className="form-group form-element">
                <label htmlFor="email">Email address</label><br/>
                <input type="email" name="email" className="form-control" placeholder="test@test.com" value={email} onChange={this.onChange} required autoFocus/>
            </div>
            <div className="form-group form-element">
                <label htmlFor="password">Password</label><br/>
                <input type="password" name="password" className="form-control" placeholder="password" value={password} onChange={this.onChange} required/>
            </div>
            <button type="submit" className="btn btn-primary form-control">Login</button>
          </form>
      </div>
      
    );
  }
}