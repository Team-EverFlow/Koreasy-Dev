import React from 'react';
import TodayWordCard from './TodayWordCard.jsx';
import Header from '../../components/Header.jsx';
import TodayCheckComponent from './TodayCheckComponent.jsx';

import '../../styles/todayWordPage/TodayWordView.scss';

function TodayWordView() {
    return (
        <div className="TodayWordView">
            <Header />
            <div className="card-box">
                <TodayWordCard />
                <TodayWordCard />
                <TodayCheckComponent />
            </div>
        </div>
    );
}

export default TodayWordView;
