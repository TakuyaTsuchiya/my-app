import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import PaymentForm from './components/PaymentForm';

ReactDOM.render(
  <div>
    <LoginForm />
    <PaymentForm />
  </div>,
  document.getElementById('root')
);
