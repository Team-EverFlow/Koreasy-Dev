import React from 'react';
import './Header.scss';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import NavigationBar from './NavigationBar';
import Divider from './Divider';

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
        </div>
    );
};

export default Header;
