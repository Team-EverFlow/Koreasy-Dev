import React from 'react';
import Takeatest from './Takeatest';
import Learnwords from './Learnwords';

function WordtestTitle({ test, date }) {
    return (
        <div className="WordtestTitle">
            <div className="Title">
                <p className="test">{test}</p>
                <p className="data">{date}</p>
            </div>
            <div className="Babo">
                <Takeatest />
                <Learnwords />
            </div>
        </div>
    );
}

export default WordtestTitle;
