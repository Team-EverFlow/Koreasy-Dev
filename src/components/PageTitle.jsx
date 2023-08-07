import React from 'react';

import './PageTitle.scss';

const PageTitle = ({ ViewName }) => {
    return (
        <div className="page-title">
            <div className="text">{ViewName}</div>
        </div>
    );
};

export default PageTitle;
