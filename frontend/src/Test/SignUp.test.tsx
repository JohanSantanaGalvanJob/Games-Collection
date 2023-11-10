import { fireEvent, render, screen } from '@testing-library/react';
import SignUp from '../Pages/SignUp';
import userEvent from '@testing-library/user-event';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe('SignUp Component', () => {
  test('renders signup form with: profile picture, username, email, password, and birthdate inputs', () => {
    render(<SignUp />);

    const profileInput = screen.getByLabelText('Profile Picture')
    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const birthdateInput = screen.getByLabelText('Birth Date');
    const submitButton = screen.getByText('Submit');

    expect(profileInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(birthdateInput).toBeInTheDocument();
  });

  test('Does a normal Signup', async () => {
    render(<SignUp />)
    const profileInput = screen.getByLabelText('Profile Picture') as HTMLInputElement;
    const usernameInput = screen.getByLabelText('Username') as HTMLInputElement;
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    const birthdateInput = screen.getByLabelText('Birth Date') as HTMLInputElement;

    const imagenFile = new File(['imagen contenido'], 'imagen.png', { type: 'image/png' });

    expect(profileInput.files?.length).toBe(0);
    await userEvent.upload(profileInput, imagenFile)
    fireEvent.change(usernameInput, { target: { value: 'test123456' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword123' } });
    fireEvent.change(birthdateInput, { target: { value: '2023-11-10' } })

    expect(profileInput.files?.length).toBe(1);
    expect(usernameInput.value).toBe('test123456');
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testpassword123');
    expect(birthdateInput.value).toBe('2023-11-10')

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(mockUsedNavigate).toHaveBeenCalledWith('/Home')
  });

  test('validates password pattern correctly', async () => {
    render(<SignUp />);
    const profileInput = screen.getByLabelText('Profile Picture') as HTMLInputElement;
    const usernameInput = screen.getByLabelText('Username') as HTMLInputElement;
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    const birthdateInput = screen.getByLabelText('Birth Date') as HTMLInputElement;
    const submitButton = screen.getByText('Submit');

    // Password with valid pattern'
    const imagenFile = new File(['imagen contenido'], 'imagen.png', { type: 'image/png' });

    expect(profileInput.files?.length).toBe(0);
    await userEvent.upload(profileInput, imagenFile)
    fireEvent.change(usernameInput, { target: { value: 'test123456' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidPassword123' } });
    fireEvent.change(birthdateInput, { target: { value: '2023-11-10' } })
    fireEvent.click(submitButton);
    expect(mockUsedNavigate).toHaveBeenCalledWith('/Home')

    // Password with invalid pattern
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('Debe tener al menos 1 número y 8 caracteres.')).toBeInTheDocument();
  });
});


