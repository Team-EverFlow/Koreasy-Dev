import React from 'react';
import { Link } from 'react-router-dom';

const Learnwords = () => (
    <div className="Learnwords">
        <Link to="/Learnwords">
            <button className="Learnbutton">Learn Words</button>
        </Link>
    </div>
);

export default Learnwords;
