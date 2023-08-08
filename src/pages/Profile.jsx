import React from 'react';
import Header from '../components/Header';
import ProfileIconDump from '../assets/images/ProfileRed.svg';
import '../styles/Profile.scss';
import '../styles/MyBadge.scss';
import ProfileButton from '../components/ProfileButton';
import Badge from '../components/Badge';

function ProfileView() {
    const ProfileIcon = ProfileIconDump;
    return (
        <div>
            <Header />
            <div className={'profile'}>
                <div className={'profile-background'}></div>
                <div className={'profile-main'}>
                    <img
                        src={ProfileIcon}
                        className={'profile-image'}
                        alt="profile image"
                    />
                    <span className={'profile-nickname'}>Halogen</span>
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
                        <div className={'my-badge-right-arrow-icon'} />
                    </div>
                    <div className={'badge-group'}>
                        <Badge imageUrl={'https://yhs.kr/static/image/python.svg'} />
                        <Badge
                            imageUrl={'https://yhs.kr/static/image/python.svg'}
                            active={true}
                        />
                        <Badge
                            imageUrl={'https://yhs.kr/static/image/python.svg'}
                            active={true}
                        />
                        <Badge imageUrl={'https://yhs.kr/static/image/python.svg'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;
