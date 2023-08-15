import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ProfileIconDump from '../assets/images/ProfileRed.svg';
import NavigationBar from './NavigationBar';
import Divider from './Divider';
import PageTitle from './PageTitle';
import {
    GetCurrentUserFromFirebase,
    GetUserInformation,
} from '../firebase/api/userAPI';

import '../styles/components/Header.scss';

// Header
/**
 * @param {boolean} [isNavigationBar=false] isNavigationBar Navigation 활성화 유무
 * @param {string | undefined} [viewName=undefined] viewName PageTitle에 들어갈 viewName 값, 기본값으로 둘 경우 비활성화 됩니다.
 * @param {string} [navigationViewName=PreviousView] navigationViewName Navigation에 들어갈 viewName 값
 */
const Header = ({
    isNavigationBar = false,
    viewName = undefined,
    navigationViewName = 'PreviousView',
}) => {
    const [profileIcon, setProfileIcon] = useState(ProfileIconDump);
    let navigate = useNavigate();
    useEffect(() => {
        let userInfo = GetCurrentUserFromFirebase();
        if (userInfo !== null) {
            userInfo = userInfo.uid;
        } else {
            userInfo = GetCurrentUserFromFirebase();
            navigate('./login');
        }
        GetUserInformation(userInfo).then(result => {
            if (result.success) {
                setProfileIcon(result.user.profileAvatarUrl);
            }
        });
    });

    return (
        <div>
            <div className="header">
                <div className="service-name">
                    <Link
                        to="/"
                        className="service-name-link link-offset-2 link-underline link-underline-opacity-0"
                    >
                        Koreasy
                    </Link>
                    <Link to="/profile">
                        <img
                            src={profileIcon}
                            alt="Profile"
                            className="profile-icon"
                        />
                    </Link>
                </div>
            </div>

            {isNavigationBar && <NavigationBar viewName={navigationViewName} />}
            <Divider />
            {viewName !== undefined && <PageTitle viewName={viewName} />}
        </div>
    );
};

export default Header;
