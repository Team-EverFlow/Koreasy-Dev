import { React } from 'react';
import Header from '../components/Header';
import Badge from '../components/Badge';
import BadgeGroup from '../components/BadgeGroup';

function MyBadgesViewSetting() {
    return (
        <div>
            <Header isNavigationBar={true} viewName={'My Badges'} />
            <BadgeGroup badges={[]} />
            <div></div>
        </div>
    );
}

export default MyBadgesView;
