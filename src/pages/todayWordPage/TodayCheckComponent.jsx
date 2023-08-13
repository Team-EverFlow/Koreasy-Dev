import React from 'react';
import '../../styles/todayWordPage/TodayCheckComponent.scss';

function TodayCheckComponent({ cnt }) {
    return (
        <div>
            <div className="today-check-background">
                <div className="circle-frame">
                    <div className="circle-first">1</div>
                    <div className="circle-first">2</div>
                </div>
                <div className="today-check-text-frame">
                    <span className="today-check-title">you attended</span>
                    <span className="today-check-info">aug 5, 2023</span>
                </div>
            </div>
        </div>
    );
}

export default TodayCheckComponent;
