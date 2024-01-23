import React from 'react';

const LoginForm = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Simulando llamada al backend para inicio de sesión:', { username, password });


    try {
      const response = await fetch('http://localhost:5176/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Usuario:</label>
      <input type="text" id="username" required />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" required />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
