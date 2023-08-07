import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="background">
            <div className="text">
                <p>
                    <a
                        class="text link-offset-2 link-underline link-underline-opacity-0"
                        href="."
                    >
                        Privacy Policy
                    </a>
                </p>
                <p>
                    <a
                        class="text link-offset-2 link-underline link-underline-opacity-0"
                        href="."
                    >
                        Sign out
                    </a>
                </p>
                <p>
                    <a
                        class="text link-offset-2 link-underline link-underline-opacity-0"
                        href="."
                    >
                        Quit Service
                    </a>
                </p>
                <p>
                    <a
                        class="text link-offset-2 link-underline link-underline-opacity-0"
                        href="."
                    >
                        About team
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
