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
import unknownBadge from './mybadge/unknownBadge';
import { ToastGenerator } from '../components/ToastGenerator';

function ProfileView() {
    let [profile, setProfile] = useState({
        name: 'user',
        profileIcon: ProfileIconDump,
        badges: [],
    });

    const convertBadgeObject = object => {
        return object;
    }; // TODO()

    let [MySentenceWIPToast, onMySentenceWIPToastCall] = ToastGenerator();

    useEffect(() => {
        GetCurrentUserInformation().then(result => {
            if (result.success) {
                setProfile({
                    ...profile,
                    name: result.user.username,
                    profileIcon:
                        result.user.profileAvatarUrl ?? ProfileIconDump,
                    badges: convertBadgeObject(
                        result.user.repBadge.concat(
                            Array(6 - result.user.repBadge.length).fill(
                                unknownBadge,
                            ),
                        ),
                    ),
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
                            title={'My Sentences'}
                            onClick={() => {
                                onMySentenceWIPToastCall();
                            }}
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
                    <BadgeGroup badges={profile.badges} detail={false} />
                </div>
            </div>
            <MySentenceWIPToast
                message="로그인 하는 중에 에러가 발생하였어요.\n잠시 후에 다시 시도해주세요."
                icon={false}
            />
        </div>
    );
}

export default ProfileView;
