import React from 'react';
import Header from '../components/Header';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import '../styles/Profile.scss';
import '../styles/MyBadge.scss';
import ProfileButton from '../components/ProfileButton';
import BadgeGroup from '../components/BadgeGroup';
import Chevrion from '../components/Chevrion';

function ProfileView() {
    let dumpProfile = {
        id: 'halogen',
        name: 'Halogen',
        profileIcon: ProfileIconDump,
        badges: [
            {
                id: 1,
                title: 'Python 최고',
                imageUrl: 'https://yhs.kr/static/image/python.svg',
                date: new Date(),
                active: false,
            },
            {
                id: 2,
                title: 'Kotlin 최고',
                imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
                date: new Date(),
                active: true,
            },
            {
                id: 1,
                title: 'Python 최고',
                imageUrl: 'https://yhs.kr/static/image/python.svg',
                date: new Date(),
                active: false,
            },
            {
                id: 2,
                title: 'Kotlin 최고',
                imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
                date: new Date(),
                active: true,
            },
            {
                id: 1,
                title: 'Python 최고',
                imageUrl: 'https://yhs.kr/static/image/python.svg',
                date: new Date(),
                active: false,
            },
            {
                id: 2,
                title: 'Kotlin 최고',
                imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
                date: new Date(),
                active: true,
            },
        ],
    };
    return (
        <div>
            <Header />
            <div className={'profile'}>
                <div className={'profile-background'}></div>
                <div className={'profile-main'}>
                    <img
                        src={dumpProfile.profileIcon}
                        className={'profile-image'}
                        alt="profile image"
                    />
                    <span className={'profile-nickname'}>
                        {dumpProfile.name}
                    </span>
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
                            <Chevrion direction='Right' color='MainColor' />
                        </div>
                    </div>
                    <BadgeGroup badges={dumpProfile.badges} />
                </div>
            </div>
        </div>
    );
}

export default ProfileView;
