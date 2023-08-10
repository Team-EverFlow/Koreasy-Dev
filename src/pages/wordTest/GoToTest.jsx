import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/GoToTest.scss';

const GoToTest = () => (
    <div className="go-to-test">
        <Link to="/TestPageGoToTest">
            <button className="go-to-test-button">Go to test</button>
        </Link>
    </div>
);

export default GoToTest;
