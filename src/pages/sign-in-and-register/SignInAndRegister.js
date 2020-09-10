import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import Register from '../../components/register/Register';
import './SignInAndRegister.styles.scss';

const SignInAndRegister = () => {
  return (
    <div className='sign-in-and-register'>
      <SignIn />
      <Register />
    </div>
  )
}

export default SignInAndRegister
