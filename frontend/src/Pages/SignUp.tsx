import '../Styles/SignUp.scss'

import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate('/Home');
    };

    return (
        <>
            <div className="signup-container">
                <FontAwesomeIcon icon={faGamepad} className='signup-icon' />
                <h2 className='signup-title'>Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="helloworld123" value={username}
                        onChange={(e) => setUsername(e.target.value)} required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="hello@example.com" value={email}
                    onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="+8 characters & numbers" value={password}
                        onChange={(e) => setPassword(e.target.value)} required/>
                    <label htmlFor="birthdate">Birth Date</label>
                    <input type="date" id="birthdate" name="birthdate" placeholder="19/11/2003" value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)} required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
