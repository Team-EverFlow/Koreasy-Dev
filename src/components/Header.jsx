import React from 'react';
import './Header.scss';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import NavigationBar from './NavigationBar';
import Divider from './Divider';
import PageTitle from './PageTitle';

const Header = ({
    isNavigationBar,
    isPageTitle,
    viewName,
    navigationViewName,
}) => {
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

            {isNavigationBar && <NavigationBar viewName={navigationViewName} />}
            <Divider />
            {isPageTitle && <PageTitle viewName={viewName} />}
        </div>
    );
};

export default Header;
