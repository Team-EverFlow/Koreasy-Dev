import React from 'react';

import './PageTitle.scss';

const PageTitle = () => {
    const ViewName = 'ViewName';
    return (
        <div className="page-title">
            <div className="text">{ViewName}</div>
        </div>
    );
};

export default PageTitle;
