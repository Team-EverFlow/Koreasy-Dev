import React from 'react';
import '../styles/Login.scss';
import { Button } from 'react-bootstrap';
import googleLogo from '../assets/images/google.png';
import { GoogleAuth } from '../firebase/api/authAPI';
import { SetUserInformation } from '../firebase/api/userAPI';
import { ToastGenerator } from '../components/ToastGenerator';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    /**
     * 회원가입을 하는 함수입니다.
     * @param user 회원가입된 사용자 정보를 반환합니다.
     * @returns {Promise<boolean>}
     */
    const registerUser = async user => {
        try {
            const userProfile = {
                username: user.displayName,
                profile_background_color: 'blue',
                profile_avatar_url: user.photoURL,
            };
            const { success } = await SetUserInformation(user.uid, userProfile);
            return success;
        } catch (e) {
            return false;
        }
    };

    /**
     * 로그인 처리를 담당하는 함수입니다.
     * @returns {Promise<boolean>} 로그인 결과를 반환합니다.
     */
    const onSignEvent = async () => {
        try {
            const { state, user } = await GoogleAuth();
            switch (state) {
                case 'signIn':
                    return true;
                case 'register':
                    onRegisterFailedToastCall();
                    return await registerUser(user);
                case 'error':
                    onLoginFailedToastCall();
                    return false;
                default:
                    return false;
            }
        } catch (e) {
            onLoginFailedToastCall();
            return false;
        }
    };

    const onLoginButtonClick = () => {
        onSignEvent().then(result => {
            if (result) {
                navigate('/');
            }
        });
    };

    let [LoginFailedToast, onLoginFailedToastCall] = ToastGenerator();
    let [RegisterFailedToast, onRegisterFailedToastCall] = ToastGenerator();

    return (
        <div>
            <div className="login-service-group">
                <h1 className="login-service-name">Koreasy</h1>
                <span className="login-service-description">
                    Easy way to learn Korean
                </span>
            </div>
            <div className="login-button-group">
                <Button className="login-button" onClick={onLoginButtonClick}>
                    <img src={googleLogo} alt="google logo" />
                    <span className="login-button-title">
                        Sign in with Google
                    </span>
                </Button>
                <span className="login-button-description">
                    Sign up with Google
                </span>
            </div>
            <RegisterFailedToast
                message="회원가입에 실패하였어요.\n잠시 후에 다시 시도해주세요."
                icon={true}
            />
            <LoginFailedToast
                message="로그인 하는 중에 에러가 발생하였어요.\n잠시 후에 다시 시도해주세요."
                icon={true}
            />
        </div>
    );
}

export default LoginPage;
