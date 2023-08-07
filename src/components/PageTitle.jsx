import React from 'react';

import './PageTitle.scss';

const PageTitle = ({ viewName }) => {
    return (
        <div className="page-title">
            <div className="text">{viewName}</div>
        </div>
    );
};

export default PageTitle;
