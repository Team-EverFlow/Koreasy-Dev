import React from 'react';
import Header from '../components/Header';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import '../styles/profile.scss';

function ProfileView() {
    const ProfileIcon = ProfileIconDump;
    return (
        <div>
            <Header />
            <div className={'profile'}>
                <div className={'profile-background'}></div>
                <div className={'profile-main'}>
                    <img src={ProfileIcon} />
                    <span className={'profile-nickname'}>Halogen</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;
