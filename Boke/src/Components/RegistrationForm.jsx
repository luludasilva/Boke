import React from 'react';

const RegistrationForm = () => {
  const handleRegistration = async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value;
    console.log('Simulando llamada al backend para registro:', { username, password, contact });

  
    try {
      const response = await fetch('http://localhost:5176/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, contact }),
      });

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <label htmlFor="username">Usuario:</label>
      <input type="text" id="username" required />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" required />
      <label htmlFor="contact">Contacto:</label>
      <input type="text" id="contact" required />
      <button type="submit">Registro</button>
    </form>
  );
};

export default RegistrationForm;







