import React, { useState } from 'react';
import LoginForm from './LoginForm.jsx';
import RegistrationForm from './RegistrationForm';

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="login-container">
      <button onClick={toggleForm}>
        {showLoginForm ? 'Registro' : 'Login'}
      </button>
      {showLoginForm ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default Login;