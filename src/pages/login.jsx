import React from 'react';
import '../styles/pages/login.scss';
import { Button } from 'react-bootstrap';
import googleLogo from '../assets/google.png';

function LoginPage() {
    return (
        <div>
            <div className={'login_service_group'}>
                <h1 className={'login_service_name'}>Koreasy</h1>
                <span className={'login_service_description'}>
                    Easy way to learn Korean
                </span>
            </div>
            <div className={'login_button_group'}>
                <Button className={'login_button'}>
                    <img src={googleLogo} />
                    <span className={'login_button_title'}>
                        Sign in with Google
                    </span>
                </Button>
                <span className={'login_button_description'}>
                    Sign up with Google
                </span>
            </div>
        </div>
    );
}

export default LoginPage;
