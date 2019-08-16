import React, { useState } from 'react';
import createUser from '../../controller/users/add'

const Add = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState('option1');

  const submit = (e) => {
    e.preventDefault();
    createUser(
      localStorage.getItem('token'),
      email,
      password,
      selected === 'option1' ? true : false
    );
    setEmail('');
    setPassword('');
    setSelected('option1')
  };

  return (
    <form data-testid="form" onSubmit={(e) => submit(e)} >
      <div className="form-group">
        <label data-testid="email" htmlFor="email">Email:</label>
        <input data-testid="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input data-testid="passwordInput" value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="text" />
      </div>
      <label>Admin:</label> <br />
      <div className="form-check form-check-inline">
        <input data-testid='radio' onChange={(e) => setSelected(e.target.value)} className="form-check-input" id="true" type="radio" name="admin" value="option1" checked={selected === 'option1'} />
        <label className="form-check-label" htmlFor="true"> Sí </label>
      </div>
      <div className="form-check form-check-inline">
        <input  data-testid='radioNo' onChange={(e) => setSelected(e.target.value)} className="form-check-input" id="false" type="radio" name="admin" value="option2" checked={selected === 'option2'} />
        <label className="form-check-label" id="false" htmlFor="false"> No </label>
      </div>
      <div className="form-group row">
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-primary">Cancel</button>
      </div>
    </form>
  )
};

export default Add;