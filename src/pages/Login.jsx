import React from 'react';
import '../styles/Login.scss';
import { Button } from 'react-bootstrap';
import googleLogo from '../assets/images/google.png';
import { GoogleAuth } from '../firebase/api/authAPI';

function LoginPage() {
    const onLoginButtonClick = () => {
        GoogleAuth().then(result => {
            console.log(result.state, result.user);
            switch (result.state) {
                case 'register':
                    return;
                case 'error':
                    return;
                case 'signIn':
                    return;
            }
        });
    };

    return (
        <div>
            <div className={'login-service-group'}>
                <h1 className={'login-service-name'}>Koreasy</h1>
                <span className={'login-service-description'}>
                    Easy way to learn Korean
                </span>
            </div>
            <div className={'login-button-group'}>
                <Button className={'login-button'} onClick={onLoginButtonClick}>
                    <img src={googleLogo} alt={'google logo'} />
                    <span className={'login-button-title'}>
                        Sign in with Google
                    </span>
                </Button>
                <span className={'login-button-description'}>
                    Sign up with Google
                </span>
            </div>
        </div>
    );
}

export default LoginPage;
