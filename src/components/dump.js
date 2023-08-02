// dump file

import React from 'react';
import './ProfileEdit.css';
import Profile_red from '../assets/Profile_Red.svg';

function ProfileEdit() {
    var colorList = ['red', 'yellow', 'green', 'blue', 'purple'];

    return (
        <div className="ProfileEdit-style">
            <div className="Profile-img">
                <img src={Profile_red} width={269}></img>
            </div>
            <div className="ProfileEdit-color">
                <div className="color-info">
                    {colorList.map(v => (
                        <div className={v}></div>
                    ))}
                </div>
                <div className="check-cancel">
                    <div className="cancel cell">취소</div>
                    <div className="check cell">확인</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileEdit;
