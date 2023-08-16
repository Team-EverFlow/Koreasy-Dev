import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import BadgeGroup from '../../components/BadgeGroup';
import '../../styles/MyBadge.scss';
import badgeList from './badgeList';
import { Link, useNavigate } from 'react-router-dom';
import { ToastGenerator } from '../../components/ToastGenerator';
import { UpdateRepBadge } from '../../firebase/api/BadgeApi';
import { GetCurrentUserInformation } from '../../firebase/api/userAPI';
import { updateBadgeObjectFromMyBadges } from './updateBadgeObject';

function MyBadgesViewSetting() {
    const [selectedBadge, setSelectedBadge] = useState(
        Array(badgeList.length).fill(false),
    );
    const [badges, setBadgeList] = useState(badgeList);
    const [MaxSelectWarningToast, onMaxSelectWarningCall] = ToastGenerator();
    const [ExceptionToast, onExceptionToast] = ToastGenerator();
    const navigate = useNavigate();

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

                badges.map((badge, index) => {
                    if (result.user.repBadge.includes(badge.id)) {
                        setSelectedBadge(prevState => {
                            return prevState.map((badgeChecked, badgeIndex) => {
                                return badgeIndex === index;
                            });
                        });
                    }
                });
            }
        });
    }, []);
    const onBadgeClick = (badgeIndex, _) => {
        if (!badges[badgeIndex].active) {
            return;
        }

        if (selectedBadge.filter(Boolean).length >= 6) {
            onMaxSelectWarningCall();
            return;
        }
        setSelectedBadge(prevState => {
            return prevState.map((badgeChecked, index) => {
                return index === badgeIndex ? !badgeChecked : badgeChecked;
            });
        });
    };

    const onConfirmButtonClick = () => {
        UpdateRepBadge(
            selectedBadge
                .map((value, index) => (value ? badgeList[index].id : null))
                .filter(index => index !== null),
        ).then(result => {
            if (result.success) {
                navigate('/profile/badge');
            } else {
                // console.log(result.error);
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
                badges={badges}
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
