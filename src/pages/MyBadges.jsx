import { React } from 'react';
import Header from '../components/Header';
import BadgeGroup from '../components/BadgeGroup';

function MyBadgesView() {
    let dumpBadge = [
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
    ];
    return (
        <div>
            <Header isNavigationBar={true} viewName={'My Badges'} />
            <BadgeGroup
                badges={dumpBadge}
                onClick={id => {
                    console.log(id); // for debug
                }}
            />
            <div></div>
        </div>
    );
}

export default MyBadgesView;
