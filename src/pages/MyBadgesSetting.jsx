import React from 'react';
import Header from '../components/Header';
import BadgeGroup from '../components/BadgeGroup';
import '../styles/MyBadge.scss';
import { Link } from 'react-router-dom';

function MyBadgesViewSetting() {
    return (
        <div>
            <Header isNavigationBar={true} viewName="My Badges" />
            <BadgeGroup badges={[]} />
            <div className="my-badge-button-group">
                <Link to="/badge" className="my-badge-button cancel">
                    Cancel
                </Link>
                <Link to="/badge" className="my-badge-button">
                    Confirm
                </Link>
            </div>
        </div>
    );
}

export default MyBadgesViewSetting;
