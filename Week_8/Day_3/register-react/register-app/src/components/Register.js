import React from 'react';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      username:'',
      password:'',
      message:''
    }
  }
  handleChange = (e) => {
                    // DESTRUCTING: e.target.name = Key  / e.target.value = Value
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {firstname,lastname,email,username,password} = this.state
    console.log(firstname,lastname,email,username,password);
    fetch('http://localhost:5000/register',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({firstname,lastname,email,username,password})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({message:data.message})
    })
    .catch(e => {
      console.log(e);
    })
  }
  render(){
    return(
      <>
        <h4>Register</h4>
        <form onSubmit={this.handleSubmit}>
        <div><input onChange={this.handleChange} type='text' name='firstname' placeholder='First Name'/></div>
        <div><input onChange={this.handleChange} type='text' name='lastname' placeholder='Last Name'/></div>
        <div><input onChange={this.handleChange} type='text' name='email' placeholder='Email'/></div>
        <div><input onChange={this.handleChange} type='text' name='username' placeholder='Username'/></div>
        <div><input onChange={this.handleChange} type='text' name='password' placeholder='Password'/></div>
        <div><input type='submit' value='Submit' /></div>
        </form>
        <div>{this.state.message}</div>
      </>
    )
  }
}
export default Register;
