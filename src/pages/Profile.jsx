import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import '../styles/Profile.scss';
import '../styles/MyBadge.scss';
import ProfileButton from '../components/ProfileButton';
import BadgeGroup from '../components/BadgeGroup';
import Chevrion from '../components/Chevrion';
import { GetCurrentUserInformation } from '../firebase/api/userAPI';
import { Link, useNavigate } from 'react-router-dom';
import unknownBadge from './mybadge/unknownBadge';
import { ToastGenerator } from '../components/ToastGenerator';
import badgeList from './mybadge/badgeList';

function ProfileView() {
    let [profile, setProfile] = useState({
        name: 'user',
        profileIcon: ProfileIconDump,
        badges: [],
    });
    const navigate = useNavigate();

    let [MySentenceWIPToast, onMySentenceWIPToastCall] = ToastGenerator();

    useEffect(() => {
        GetCurrentUserInformation().then(result => {
            if (result.success) {
                setProfile({
                    ...profile,
                    name: result.user.username,
                    profileIcon:
                        result.user.profileAvatarUrl ?? ProfileIconDump,
                    badges: result.user.repBadge
                        .map(badgeId => {
                            return {
                                ...badgeList.find(
                                    badge => badge.id === badgeId,
                                ),
                                active: true,
                            };
                        })
                        .concat(
                            Array(6 - result.user.repBadge.length).fill(
                                unknownBadge,
                            ),
                        ),
                });
            }
        });
    }, []);
    return (
        <div>
            <Header />
            <div className="profile">
                <div className="profile-background" />
                <div className="profile-main">
                    <img
                        src={profile.profileIcon}
                        className="profile-image"
                        alt="profile"
                    />
                    <span className="profile-nickname">{profile.name}</span>
                    <div className="profiles-button-group">
                        <ProfileButton
                            icon="bookmarks_icon"
                            title="Bookmarks"
                            onClick={() => {
                                navigate('/myBookmark');
                            }}
                        />
                        <ProfileButton
                            icon="activities_icon"
                            title="My Sentences"
                            onClick={() => {
                                onMySentenceWIPToastCall();
                            }}
                        />
                    </div>

                    <div className="my-badge-title">
                        <h2>My Badge</h2>
                        <div className="my-badge-right-arrow-icon">
                            <Link to="/profile/badge">
                                <Chevrion direction="Right" color="MainColor" />
                            </Link>
                        </div>
                    </div>
                    <BadgeGroup badges={profile.badges} detail={false} />
                </div>
            </div>
            <MySentenceWIPToast
                message="아직은 준비 중인 기능입니다.\n재미있는 기능을 위해 노력하도록 할께요!"
                icon={false}
            />
        </div>
    );
}

export default ProfileView;
