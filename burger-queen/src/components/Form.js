import React, { useState } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Inputs from './Input'
import MyFetch from './fetch';


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitInfo = (e) => {
    console.log('hi')
    e.preventDefault()
    MyFetch('users', 'GET', {"Authorization": "Bearer kndcbukwe12"})
  }
  return (
    <form  className="col-12 flex-column d-flex form-group">
      <h3 className="py-5">Iniciar sesión</h3>
      <Inputs
        type='email'
        value={email}
        update={updateEmail}
        placeholder='Email'
        icon='fas fa-user' />
      <Inputs
        type='password'
        value={password}
        update={updatePassword}
        placeholder='Password'
        icon='fas fa-lock'
      />
      <Link to='/home' onClick={submitInfo} className='btn btn-color'>Ingresar</Link>
    </form>
  )
}

export default Form;