import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../../components/button/Button';
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';
import './SignIn.styles.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
          <div className='buttons'>
            <Button type='submit'> Sign in </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google{' '}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
