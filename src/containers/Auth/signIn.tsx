import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationScreenTemplate from 'components/authentication-template/AuthenticationScreenTemplate';
import TextInput from 'components/textbox/Textbox';
// import { GoogleIcon } from 'assets/images';
import { PASSWORD, USERNAME } from './constants';
import { setLocalStorageItemWithExpiry } from 'resources/utils';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from 'firebase.js';

const SignIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async () => {
        if (USERNAME === username && PASSWORD === password) {
            navigate('/home');
            localStorage.setItem('signedIn', JSON.stringify(true));
            setLocalStorageItemWithExpiry('LOGIN_EXPIRY', 21600000);
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <AuthenticationScreenTemplate>
            <div className="logo-container">Logo</div>
            <div className="header-text-container">
                <div className="title-text">
                    <div className="sub-title">Welcome back to</div>
                    <div className="transcribe-text">MDM</div>
                </div>
                <div className="sub-title">Please login to your account</div>
            </div>
            <div className="inputs-container">
                <div className="textbox-container">
                    <div>Email</div>
                    <TextInput
                        className="input-textbox"
                        onChange={(e: any) => {
                            setUsername(e);
                        }}
                        value={username}
                    />
                </div>

                <div className="textbox-container">
                    <div>Password</div>
                    <TextInput
                        className="input-textbox"
                        type="password"
                        onChange={(e: any) => {
                            setPassword(e);
                        }}
                        value={password}
                    />
                </div>

                {/* <div className="forgot-password">Forgot Password?</div> */}
            </div>
            {error ? <div className="error-message">{error}</div> : null}
            <div className="buttons-container">
                <div className="item-button">
                    <div className="signup-button" onClick={onSubmit}>
                        LOGIN
                    </div>
                </div>
            </div>
        </AuthenticationScreenTemplate>
    );
};

export default SignIn;
