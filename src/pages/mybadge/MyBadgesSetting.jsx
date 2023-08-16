import React, { useState } from 'react';
import Header from '../../components/Header';
import BadgeGroup from '../../components/BadgeGroup';
import '../../styles/MyBadge.scss';
import badgeList from './badgeList';
import { Link, useNavigate } from 'react-router-dom';
import { ToastGenerator } from '../../components/ToastGenerator';
import { UpdateRepBadge } from '../../firebase/api/BadgeApi';

function MyBadgesViewSetting() {
    // TODO(profile.repBadge)
    const [selectedBadge, setSelectedBadge] = useState(
        Array(badgeList.length).fill(false),
    );
    const [MaxSelectWarningToast, onMaxSelectWarningCall] = ToastGenerator();
    const [ExceptionToast, onExceptionToast] = ToastGenerator();
    const navigate = useNavigate();
    const onBadgeClick = id => {
        if (!badgeList[id].active) {
            return;
        }

        if (selectedBadge.filter(Boolean).length >= 6) {
            onMaxSelectWarningCall();
            return;
        }
        setSelectedBadge(prevState => {
            return prevState.map((badgeChecked, index) => {
                return index === id ? !badgeChecked : badgeChecked;
            });
        });
    };

    const onConfirmButtonClick = () => {
        UpdateRepBadge(
            selectedBadge
                .filter(Boolean)
                .map((_, index) => badgeList[index].id),
        ).then(result => {
            if (result.success) {
                navigate('/profile/badge');
            } else {
                console.log(result.error);
                onExceptionToast();
            }
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
                <Link to="/profile/badge" className="my-badge-button cancel">
                    Cancel
                </Link>
                <button
                    className="my-badge-button"
                    onClick={onConfirmButtonClick}
                >
                    Confirm
                </button>
            </div>
            <MaxSelectWarningToast
                icon={false}
                message="You can select up to 6 badges."
            />
            <ExceptionToast
                icon={true}
                message="알 수 없는 오류가 발생하였어요.\n잠시 후 다시 시도해주세요."
            />
        </div>
    );
}

export default MyBadgesViewSetting;
