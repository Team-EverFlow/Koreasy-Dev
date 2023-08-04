import React from 'react';
import './Wordbook.scss';
import backIcon from '../assets/back.svg';
import searchIcon from '../assets/Search.svg';
import frontIcon from '../assets/front.svg';

const contentData = [
  {
    dateText: '4th week, Aug',
    dateRange: '2023.08.21 ~ 08.25',
  },
  {
    dateText: '3rd week, Aug',
    dateRange: '2023.08.14 ~ 08.18',
  },
  {
    dateText: '2nd week, Aug',
    dateRange: '2023.08.07 ~ 08.11',
  },
  {
    dateText: '1st week, Aug',
    dateRange: '2023.07.31 ~ 08.04',
  },
  {
    dateText: '4th week, Aug',
    dateRange: '2023.07.24 ~ 07.28',
  }
];

const Wordbook = () => {
  return (
    <div className="wordbook-container">
      <div className="header">
        <img className="icon-back" src={backIcon} alt="Back" />
        <span className="title">Wordbook</span>
        <img className="icon-search" src={searchIcon} alt="Search" />
      </div>
      <div className="date-section">
        {contentData.map((content, index) => (
          <div key={index} className="date-item" style={{ top: `${index * 110}px` }}>
            <span className="date-text">{content.dateText}</span>
            <div className="separator"></div>
            <span className="date-range">{content.dateRange}</span>
            <img className="icon-front" src={frontIcon} alt="Front" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wordbook;
