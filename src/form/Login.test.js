import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';
import { Provider } from 'react-redux';
import store from '../App/store'; // Asegúrate de importar tu tienda Redux

describe('Login Component', () => {
  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(screen.getByText('Registro Panel Admin ⚙️')).toBeInTheDocument();
  });

  test('submits form data', async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const nameInput = screen.getByLabelText('Full name');
    const emailInput = screen.getByLabelText('Email');
    const teléfonoInput = screen.getByLabelText('Phone');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const submitButton = screen.getByText('Register');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(teléfonoInput, { target: { value: '+52 351 278 35 33' } }); 
    fireEvent.change(passwordInput, { target: { value: 'Password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password123' } });

    fireEvent.click(submitButton);

    // Aquí puedes agregar aserciones adicionales según la lógica de tu aplicación
  });
});
