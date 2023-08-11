import React from 'react';
import './ProfileButton.scss';

function ProfileButton({ icon, title, onClick }) {
    return (
        <button onClick={onClick} className="profile-button">
            <div className={'profile-button-icon ' + icon} />
            <span>{title}</span>
        </button>
    );
}

export default ProfileButton;
