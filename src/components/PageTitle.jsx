import React from 'react';

import '../styles/components/PageTitle.scss';

// PageTitle
/**
 * @param {string} viewName PageTitle View 이름
 */
const PageTitle = ({ viewName }) => {
    return (
        <div className="page-title">
            <div className="text">{viewName}</div>
        </div>
    );
};

export default PageTitle;
