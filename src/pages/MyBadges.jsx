import React from 'react';
import Header from '../components/Header';
import BadgeGroup from '../components/BadgeGroup';
import '../styles/MyBadge.scss';
import { Link } from 'react-router-dom';
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
                <Link to="/badge/setting" className="my-badge-button">
                    Set my signiture badge
                </Link>
            </div>
        </div>
    );
}

export default MyBadgesView;
