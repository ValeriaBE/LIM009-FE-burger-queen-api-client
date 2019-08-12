import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../../components/Home/index';
import { fireEvent, cleanup, act, waitForDomChange, waitForElement } from '@testing-library/react';
import { renderWithRouter, history } from '../utils';
afterEach(cleanup)
it('renders without crashing', async() => {
  const historyMock = { push: jest.fn() };
  const { getByTestId } = renderWithRouter(<Home history={historyMock}/>);
  act(() => {
    fireEvent.click(getByTestId('burger'))
  })
  expect(historyMock.push.mock.calls[0]).toEqual([ ("/home")]);
});

it('renders without crashing', async() => {
  const historyMock = { push: jest.fn() };
  const { getByTestId } = renderWithRouter(<Home history={historyMock}/>);
  act(() => {
    fireEvent.click(getByTestId('close'))
  })
  expect(historyMock.push.mock.calls[0]).toEqual([ ("/")]);
});

it('renders without crashing', async() => {
  const historyMock = { push: jest.fn() };
  const { getByTestId } = renderWithRouter(<Home history={historyMock}/>);

  await waitForElement(() => getByTestId('header'))
  act(() => {
    fireEvent.click(getByTestId('ÓRDENES'))
  })
  expect(historyMock.push.mock.calls[0]).toEqual([ ("/orders")]);
});

it('renders without crashing', async() => {
  const historyMock = { push: jest.fn() };
  const { getByTestId } = renderWithRouter(<Home history={historyMock}/>);

  await waitForElement(() => getByTestId('header'))
  act(() => {
    fireEvent.click(getByTestId('COCINA'))
  })
  expect(historyMock.push.mock.calls[0]).toEqual([ ("/cocina")]);
});