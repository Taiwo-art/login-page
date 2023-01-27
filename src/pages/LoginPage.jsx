import React from 'react'
import FormAction from '../components/FormAction'
import FormExtra from '../components/FormExtra'
import Header from '../components/Header'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <>
          <Header
              heading="Login to your account"
              paragraph="Don't have an account yet?"
              linkName="Register here"
              linkUrl="/register" />
      <Login />
      <FormAction />
      <FormExtra />
    </>
  )
}

export default LoginPage
