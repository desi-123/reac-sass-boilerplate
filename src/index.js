import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AnimationProvider } from './context';

ReactDOM.render(
  <AnimationProvider>
    <App />
  </AnimationProvider>,
  document.getElementById('root')
);

