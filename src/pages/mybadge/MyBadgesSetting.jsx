import React, { useState } from 'react';
import Header from '../../components/Header';
import BadgeGroup from '../../components/BadgeGroup';
import '../../styles/MyBadge.scss';
import badgeList from './badgeList';
import { Link } from 'react-router-dom';
import badge from '../../components/Badge';
import { ToastGenerator } from '../../components/ToastGenerator';

function MyBadgesViewSetting() {
    // TODO(profile.repBadge)
    const [selectedBadge, setSelectedBadge] = useState(
        Array(badgeList.length).fill(false),
    );
    const [MaxSelectWarningToast, onMaxSelectWarningCall] = ToastGenerator();
    const onBadgeClick = id => {
        if (!badgeList[id].active) {
            return;
        }

        if (selectedBadge.filter(Boolean).length >= 6) {
            onMaxSelectWarningCall();
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
            <div className="my-badge-count-group">
                <span className="my-badge-count-description">
                    You can select up to 6 badges
                </span>
                <span className="my-badge-count">
                    {selectedBadge.filter(Boolean).length}/6
                </span>
            </div>
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
            <MaxSelectWarningToast
                icon={false}
                message="You can select up to 6 badges."
            />
        </div>
    );
}

export default MyBadgesViewSetting;
