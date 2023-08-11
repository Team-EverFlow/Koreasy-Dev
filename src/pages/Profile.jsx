import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import '../styles/Profile.scss';
import '../styles/MyBadge.scss';
import ProfileButton from '../components/ProfileButton';
import BadgeGroup from '../components/BadgeGroup';
import Chevrion from '../components/Chevrion';
import { GetCurrentUserInformation } from '../firebase/api/userAPI';
import { Link } from 'react-router-dom';

function ProfileView() {
    let [profile, setProfile] = useState({
        name: 'user',
        profileIcon: ProfileIconDump,
        badges: [],
    });
    useEffect(() => {
        GetCurrentUserInformation().then(result => {
            if (result.success) {
                setProfile({
                    ...profile,
                    name: result.user.username,
                    profileIcon:
                        result.user.profileAvatarUrl ?? ProfileIconDump, // badges: result.user.repBadge ?
                });
            }
        });
    }, []);
    return (
        <div>
            <Header />
            <div className={'profile'}>
                <div className={'profile-background'}></div>
                <div className={'profile-main'}>
                    <img
                        src={profile.profileIcon}
                        className={'profile-image'}
                        alt="profile image"
                    />
                    <span className={'profile-nickname'}>{profile.name}</span>
                    <div className={'profiles-button-group'}>
                        <ProfileButton
                            icon={'bookmarks_icon'}
                            title={'Bookmarks'}
                            onClick={undefined}
                        />
                        <ProfileButton
                            icon={'activities_icon'}
                            title={'Activities'}
                            onClick={undefined}
                        />
                    </div>

                    <div className={'my-badge-title'}>
                        <h2>My Badge</h2>
                        <div className={'my-badge-right-arrow-icon'}>
                            <Link to="/badge">
                                <Chevrion direction="Right" color="MainColor" />
                            </Link>
                        </div>
                    </div>
                    <BadgeGroup badges={profile.badges} />
                </div>
            </div>
        </div>
    );
}

export default ProfileView;
