import React from 'react';
import './Header.scss';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import NavigationBar from './NavigationBar';
import Divider from './Divider';
import PageTitle from './PageTitle';
import Footer from './Footer';

const Header = () => {
    const ProfileIcon = ProfileIconDump;
    return (
        <div>
            <div className="header">
                <div className="service-name">
                    Koreasy
                    <img
                        src={ProfileIcon}
                        alt="Profile"
                        className="profile-icon"
                    />
                </div>
            </div>
            <NavigationBar />
            <Divider />
            <PageTitle />
            <Footer />
        </div>
    );
};

export default Header;
