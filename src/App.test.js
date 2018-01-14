import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './shared/Container/MainPage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage />, div);
});
