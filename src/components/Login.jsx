import React, { useState } from 'react'
import loginInputs  from '../formattributes/FormFields'
import Input from './Input';

let inputState = {};
loginInputs.forEach(loginInput=>inputState[loginInputs.id]='')
const Login = () => {
  const [loginState, setLoginState] = useState(inputState);

  const handleChange = (e) => {
    setLoginState({...loginState, [e.target.id]: e.target.value})
  }
  return (
    <form className='mt-8 space-y-6'>
      <div className='space-y-px'>
        {loginInputs.map(loginInput => <Input

          key={loginInput.id}
          handleChange={handleChange}
          value={loginState[loginInput.id]}
          labelText={loginInput.labelText}
          labelFor={loginInput.labelFor}
          id={loginInput.id}
          name={loginInput.name}
          type={loginInput.type}
          isRequired={loginInput.isRequired}
          placeholder={loginInput.placeholder}



        />)}
</div>

    </form>
  )
}

export default Login
