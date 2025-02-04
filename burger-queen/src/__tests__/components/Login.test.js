import React from 'react';
import Login from '../../components/Login';
import { fireEvent, act } from '@testing-library/react';
import { renderWithRouter, history } from '../utils';
import submit from '../../controller/login';

jest.mock('../../controller/login')

it("router validation", async() => {
  const { getByPlaceholderText, getByText } = renderWithRouter(<Login />);
  
  const fakeUser = { email: 'emily@gmail.com', password: '1234AbcffffffffffD' }
  fakeUser.email = getByPlaceholderText('Email').value;
  fakeUser.password = getByPlaceholderText('Password').value ;
  const submitBtn = getByText('Ingresar');
  
  expect(history.location.pathname).toBe("/");
  act(() => {
    fireEvent.submit(submitBtn)
  })

  expect(submit.mock.calls).toHaveLength(1)
  expect(submit.mock.calls[0][0]).toBe(fakeUser.email)
  expect(submit.mock.calls[0][1]).toBe(fakeUser.password)
});
