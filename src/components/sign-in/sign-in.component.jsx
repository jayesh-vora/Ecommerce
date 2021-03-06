import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/customButton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]:value})
  }

  render() {
    return ( 
      <div className="sign-in">
        <h1 className='title'>
          I already have an account
        </h1>
        <span className="subtitle">
          sign in with your email and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='email' 
            name='email' 
            value={this.state.email} 
            label='Email' 
            onChange={this.handleChange} 
            required 
          />
          <FormInput 
            type='password' 
            name='password' 
            value={this.state.password} 
            onChange={this.handleChange} 
            label='Password' 
            required 
          />
          <div className="buttons">
            <CustomButton type="submit" >
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogle >
              Sign In With Google
            </CustomButton>
          </div>
        </form>

      </div>
    )
  }
}

export default SignIn;