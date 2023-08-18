import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { SignOutFromFirebase, DeleteUser } from '../firebase/api/userAPI';

import '../styles/components/Footer.scss';

const Footer = () => {
    let navigate = useNavigate();
    function signOut() {
        SignOutFromFirebase();
        navigate('/login');
    }

    function withdrawal() {
        DeleteUser();
        navigate('/login');
    }

    return (
        <div className="background">
            <div className="text">
                <p>
                    <Link
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        to="https://halogen.notion.site/Koreasy-49f57cf2fe4c48beb35152e40d36a27c?pvs=4"
                    >
                        Privacy Policy
                    </Link>
                </p>
                <p>
                    <Link
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        to="https://halogen.notion.site/Koreasy-8019c878f7b745758e5a20c643525722?pvs=4"
                    >
                        Terms of Use
                    </Link>
                </p>

                <p>
                    <Link
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        onClick={signOut}
                    >
                        Sign out
                    </Link>
                </p>
                <p>
                    <Link
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        onClick={withdrawal}
                    >
                        Withdrawal
                    </Link>
                </p>
                <p>
                    <Link
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        to="https://github.com/Team-EverFlow"
                    >
                        About team
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;
