import React, { useState } from 'react';
import Header from '../../components/Header';
import BadgeGroup from '../../components/BadgeGroup';
import '../../styles/MyBadge.scss';
import badgeList from './badgeList';
import { Link } from 'react-router-dom';

function MyBadgesViewSetting() {
    // let [badge, setBadge] = useState(badgeList);

    // const onBadgeClick = id => {
    //     if (!badge[id].active) {
    //         setBadge(prevBadge => {
    //             return prevBadge.map((b, index) => {
    //                 return index === id ? { ...b, check: !b.check } : b;
    //             });
    //         });
    //     }
    // };
    const onBadgeClick = id => {};

    return (
        <div>
            <Header isNavigationBar={true} viewName="My Badges" />
            <BadgeGroup badges={badgeList} onClick={onBadgeClick} />
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
