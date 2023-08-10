import React from 'react';
import Header from '../components/Header';
import BadgeGroup from '../components/BadgeGroup';
import '../styles/MyBadge.scss';

function MyBadgesViewSetting() {
    return (
        <div>
            <Header isNavigationBar={true} viewName="My Badges" />
            <BadgeGroup badges={[]} />
            <div className="my-badge-button-group">
                <button className="my-badge-button cancel">Cancel</button>
                <button className="my-badge-button">Confirm</button>
            </div>
        </div>
    );
}

export default MyBadgesViewSetting;
