import React from 'react';
import Header from '../components/Header';
import BadgeGroup from '../components/BadgeGroup';
import '../styles/MyBadge.scss';
import dumpBadge from './dumpBadge';

function MyBadgesView() {
    return (
        <div>
            <Header isNavigationBar={true} viewName="My Badges" />
            <BadgeGroup
                badges={dumpBadge}
                onClick={id => {
                    console.log(id); // for debug
                }}
            />
            <div className="my-badge-button-group">
                <button className="my-badge-button">
                    Set my signiture badge
                </button>
            </div>
        </div>
    );
}

export default MyBadgesView;
