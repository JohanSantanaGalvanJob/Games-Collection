import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Login.scss';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate('/Home');
    };

    return (
        <>
            <div className="login-container">
                <FontAwesomeIcon icon={faGamepad} className='login-icon' />
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="hello@example.com" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="+8 characters & numbers" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Login;
