import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Login.scss';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Aquí puedes realizar la validación del regex
        const regex = /^(?=.*[0-9]).{8,}$/;
        console.log(password)
        if (!regex.test(password)) {
            console.log(password)
            setErrorMessage('Debe tener al menos 1 número y 8 caracteres.');
        } else {
            setErrorMessage('');
            // Aquí puedes realizar otras acciones después de la validación exitosa
            navigate('/Home');
        }

    };

    return (

        <>
            <div className="login-container">
                <FontAwesomeIcon icon={faGamepad} className='login-icon' />
                <h2 className='login-title'>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="hello@example.com" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                    {errorMessage && <p style={{ color: 'red', fontSize: '0.75em', margin: '0.50em', textAlign: 'start',  }}>{errorMessage}</p>}
                    <input type="password" id="password" name="password" placeholder="+8 characters & numbers"
                     value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Submit</button>

                </form>
            </div>
        </>
    );
}

export default Login;
