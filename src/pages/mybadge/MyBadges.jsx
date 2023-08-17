import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import BadgeGroup from '../../components/BadgeGroup';
import '../../styles/MyBadge.scss';
import badgeList from './badgeList';
import { Link } from 'react-router-dom';
import { GetCurrentUserInformation } from '../../firebase/api/userAPI';
import { updateBadgeObjectFromMyBadges } from './updateBadgeObject';

function MyBadgesView() {
    const [badges, setBadgeList] = useState(badgeList);
    useEffect(() => {
        GetCurrentUserInformation().then(result => {
            if (result.success) {
                setBadgeList(prevBadge => {
                    return prevBadge.map((badge, _) => {
                        return updateBadgeObjectFromMyBadges(
                            badge,
                            result.user.myBadges,
                        );
                    });
                });
            }
        });
    }, []);
    return (
        <div>
            <Header isNavigationBar={true} viewName="My Badges" />
            <BadgeGroup badges={badges} onClick={undefined} />
            <div className="my-badge-button-group">
                <Link to="/profile/badge/setting" className="my-badge-button">
                    Set my signature badge
                </Link>
            </div>
        </div>
    );
}

export default MyBadgesView;
