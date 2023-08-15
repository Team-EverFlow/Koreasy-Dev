import React from 'react';
import { Link } from 'react-router-dom';

import { SignOutFromFirebase } from '../firebase/api/userAPI';

import '../styles/components/Footer.scss';

const Footer = () => {
    function signOut() {
        SignOutFromFirebase();
        window.location.replace('/login');
    }

    return (
        <div className="background">
            <div className="text">
                <p>
                    <Link
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        to="https://halogen.notion.site/Koreasy-8019c878f7b745758e5a20c643525722?pvs=4"
                    >
                        Privacy Policy
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
                        onClick={signOut}
                    >
                        Withdrawal
                    </Link>
                </p>
                <p>
                    <Link
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        href="https://halogen.notion.site/Koreasy-8019c878f7b745758e5a20c643525722?pvs=4"
                    >
                        About team
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;
