import React from 'react';
import { Link } from 'react-router-dom';
import test1 from './test1';

const GoToTest = () => (
    <div className="take-test">
        <Link to="/test1">
            <button className="test-button">Go to test</button>
        </Link>
    </div>
);

export default GoToTest;
