import React, { useState } from 'react';
import Header from '../../components/Header';
import BadgeGroup from '../../components/BadgeGroup';
import '../../styles/MyBadge.scss';
import badgeList from './badgeList';
import { Link } from 'react-router-dom';
import badge from '../../components/Badge';

function MyBadgesViewSetting() {
    // TODO(profile.repBadge)
    const [selectedBadge, setSelectedBadge] = useState(
        Array(badgeList.length).fill(false),
    );
    const onBadgeClick = id => {
        if (!badgeList[id].active) {
            return;
        }
        setSelectedBadge(prevState => {
            return prevState.map((badgeChecked, index) => {
                return index === id ? !badgeChecked : badgeChecked;
            });
        });
    };

    return (
        <div>
            <Header isNavigationBar={true} viewName="My Badges" />
            <BadgeGroup
                badges={badgeList}
                onClick={onBadgeClick}
                badgesChecked={selectedBadge}
            />
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
