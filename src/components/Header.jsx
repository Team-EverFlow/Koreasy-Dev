import React from 'react';
import './Header.scss';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import NavigationBar from './NavigationBar';
import Divider from './Divider';
import PageTitle from './PageTitle';

// Header
/**
 * @param {boolean} [isNavigationBar=false] isNavigationBar Navigation 활성화 유무
 * @param {boolean} [isPageTitle=false] isPageTitle PageTitle 활성화 유무
 * @param {string | undefined} viewName PageTitle에 들어갈 viewName 값
 * @param {string} [navigationViewName=PreviousView] navigationViewName Navigation에 들어갈 viewName 값
 */
const Header = ({
    isNavigationBar = false,
    isPageTitle = false,
    viewName = undefined,
    navigationViewName = 'PreviousView',
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
