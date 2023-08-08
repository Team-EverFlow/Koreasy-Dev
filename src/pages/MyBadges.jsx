import React from 'react';
import Header from '../components/Header';
import BadgeGroup from '../components/BadgeGroup';
import '../styles/MyBadge.scss';

function MyBadgesView() {
    let dumpBadge = [
        {
            id: 1,
            title: 'Python 최고',
            imageUrl: 'https://yhs.kr/static/image/python.svg',
            date: new Date(),
            active: false,
            check: false,
        },
        {
            id: 2,
            title: 'Kotlin 최고',
            imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
            date: new Date(),
            active: true,
            check: false,
        },
        {
            id: 2,
            title: 'Kotlin 최고',
            imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
            date: new Date(),
            active: false,
            check: true,
        },
        {
            id: 2,
            title: 'Kotlin 최고',
            imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
            date: new Date(),
            active: true,
            check: false,
        },
        {
            id: 2,
            title: 'Kotlin 최고',
            imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
            date: new Date(),
            active: true,
            check: true,
        },
        {
            id: 2,
            title: 'Kotlin 최고',
            imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
            date: new Date(),
            active: true,
            check: false,
        },
        {
            id: 2,
            title: 'Kotlin 최고',
            imageUrl: 'https://yhs.kr/static/image/kotlin.svg',
            date: new Date(),
            active: true,
            check: false,
        },
    ];
    return (
        <div>
            <Header isNavigationBar={true} viewName="My Badges" />
            <BadgeGroup
                badges={dumpBadge}
                onClick={id => {
                    console.log(id); // for debug
                }}
            />
            <div className="my-badge-button-group">
                <button className="my-badge-button">
                    Set my signiture badge
                </button>
            </div>
        </div>
    );
}

export default MyBadgesView;
