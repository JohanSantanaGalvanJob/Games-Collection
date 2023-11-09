import '../Styles/SignUp.scss'

import { faGamepad, faPlus } from "@fortawesome/free-solid-svg-icons";
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

    const [previewSrc, setPreviewSrc] = useState('https://cdn-icons-png.flaticon.com/512/4086/4086679.png');

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (readerEvent: any) => {
                setPreviewSrc(readerEvent.target.result);
            };

            reader.readAsDataURL(file);
        } else {
            setPreviewSrc('default-image.jpg');
        }
    };

    return (
        <>
            <div className="signup-container">
                <h2 className='signup-title'>Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="profilepicture">Profile Picture</label>
                    <div className='profile-picture-container'>
                        <div className='profile-picture-image'>
                            <img src={previewSrc} alt="Imagen" />
                        </div>
                        <div>
                            <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                            <FontAwesomeIcon icon={faPlus} onClick={() => { document.getElementById('fileInput')!.click(); }} className='pfp-icon'></FontAwesomeIcon>
                        </div>
                    </div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="helloworld123" value={username}
                        onChange={(e) => setUsername(e.target.value)} required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="hello@example.com" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="+8 characters & numbers" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
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
