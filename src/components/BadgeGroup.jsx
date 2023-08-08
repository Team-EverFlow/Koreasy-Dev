import React from 'react';
import './BadgeGroup.scss.scss';
import Badge from './Badge';

function BadgeGroup({ badges, onClick }) {
    return (
        <div className={'badge-group'}>
            <Badge imageUrl={'https://yhs.kr/static/image/python.svg'} />
        </div>
    );
}

export default Badge;
