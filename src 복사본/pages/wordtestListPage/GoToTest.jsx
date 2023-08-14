import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/wordtestListStyles/GoToTest.scss';

const GoToTest = () => (
    <div className="go-to-test">
        <Link to="/">
            <button className="go-to-test-button">Go to test</button>
        </Link>
    </div>
);

export default GoToTest;
