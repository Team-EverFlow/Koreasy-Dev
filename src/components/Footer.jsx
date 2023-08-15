import React from 'react';

import '../styles/components/Footer.scss';

const Footer = () => {
    return (
        <div className="background">
            <div className="text">
                <p>
                    <a
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        href="https://halogen.notion.site/Koreasy-8019c878f7b745758e5a20c643525722?pvs=4"
                    >
                        Privacy Policy
                    </a>
                </p>
                <p>
                    <a
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        href="."
                    >
                        Sign out
                    </a>
                </p>
                <p>
                    <a
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        href="."
                    >
                        Withdrawal
                    </a>
                </p>
                <p>
                    <a
                        className="text link-offset-2 link-underline link-underline-opacity-0"
                        href="https://halogen.notion.site/Koreasy-8019c878f7b745758e5a20c643525722?pvs=4"
                    >
                        About team
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
