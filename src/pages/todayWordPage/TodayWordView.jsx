import React from 'react';
import TodayWordCard from './TodayWordCard.jsx';
import Header from '../../components/Header.jsx';

import '../../styles/todayWordPage/TodayWordView.scss';

function TodayWordView() {
    return (
        <div className="TodayWordView">
            <Header />
            <div className="card-box">
                <TodayWordCard />
                <TodayWordCard />
            </div>
        </div>
    );
}

export default TodayWordView;
