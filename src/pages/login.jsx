import React from 'react';
import '../styles/pages/login.scss';
import { Button } from 'react-bootstrap';
import googleLogo from '../assets/google.png';

function LoginPage() {
    return (
        <div>
            <div className={'login-service-group'}>
                <h1 className={'login-service-name'}>Koreasy</h1>
                <span className={'login-service-description'}>
                    Easy way to learn Korean
                </span>
            </div>
            <div className={'login-button-group'}>
                <Button className={'login-button'}>
                    <img src={googleLogo} alt={'google logo'}/>
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
