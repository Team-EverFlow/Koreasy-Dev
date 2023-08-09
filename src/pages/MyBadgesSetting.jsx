import React, { useState } from 'react';
import Header from '../components/Header';
import BadgeGroup from '../components/BadgeGroup';
import '../styles/MyBadge.scss';
import dumpBadge from './dumpBadge';

function MyBadgesViewSetting() {
    let [badge, setBadge] = useState(dumpBadge);
    return (
        <div>
            <Header isNavigationBar={true} viewName="My Badges" />
            <BadgeGroup
                badges={badge}
                onClick={id => {
                    let newBadge = [...badge];
                    console.log(id);
                    newBadge[id].check = !newBadge[id].check;
                    setBadge(newBadge);
                }}
            />
            <div className="my-badge-button-group">
                <button className="my-badge-button cancel">Cancel</button>
                <button className="my-badge-button">Confirm</button>
            </div>
        </div>
    );
}

export default MyBadgesViewSetting;
