import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Pages/Login'

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

describe('Login Component', () => {
    test('renders login form with email and password inputs', () => {
        render(<Login />);

        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByText('Submit');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('Does a normal Login', async () => {
        render(<Login />)
        const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
        const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword123' } });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('testpassword123');

        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);
        expect(mockUsedNavigate).toHaveBeenCalledWith('/Home')
    });

    test('validates password pattern correctly', () => {
        render(<Login />);
        const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
        const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
        const submitButton = screen.getByText('Submit');

        // Password with valid pattern
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword123' } });
        fireEvent.click(submitButton);
        expect(mockUsedNavigate).toHaveBeenCalledWith('/Home')

        // Password with invalid pattern
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'short' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('Debe tener al menos 1 número y 8 caracteres.')).toBeInTheDocument();
    });
});

