import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  // create div tag
  const div = document.createElement('div');

  // render <App /> inside div
  ReactDOM.render(<App />, div);
});
