import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/wordtestListStyles/GoToTest.scss';

const GoToTest = ({ id }) => (
    <div className="go-to-test">
        <Link to={`/quiz/test?id=${id}`}>
            <button className="go-to-test-button">Go to test</button>
        </Link>
    </div>
);

export default GoToTest;
