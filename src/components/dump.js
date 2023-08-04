// dump file

import React from 'react';
import './ProfileEdit.css';
import Profile_red from '../assets/Profile_Red.svg';

function ProfileEdit() {
    let colorList = ['red', 'yellow', 'green', 'blue', 'purple'];

    return (
        <div className="ProfileEdit-style">
            <div className="Profile-img">
                <img src={Profile_red} width={269} alt="123" />
            </div>
            <div className="ProfileEdit-color">
                <div className="color-info">
                    {colorList.map(v => (
                        <div className={v} />
                    ))}
                </div>
                <div className="check-cancel">
                    <div className="cancel cell">
                        가나다라마바사아자차카타파하
                    </div>
                    <div className="check cell">abcdefghijk</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileEdit;
