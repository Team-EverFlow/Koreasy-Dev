import React from 'react';
import { Link } from 'react-router-dom';
import test1 from './test1';

const Takeatest = () => (
    <div className="Takeatest">
        <Link to="/test1">
            <button className="Testbutton">Take a test</button>
        </Link>
    </div>
);

export default Takeatest;
