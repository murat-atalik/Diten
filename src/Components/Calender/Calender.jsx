import './calender.scss';

import React from 'react';

import Quarters from './Quarters';

const Q1 = [
  { quarter: 'Q1', name: 'JAN', colored: 'colored' },
  { quarter: 'Q1', name: 'FEB', colored: 'colored' },
  { quarter: 'Q1', name: 'MAR', colored: 'regular' },
];
const Q2 = [
  { quarter: 'Q2', name: 'APR', colored: 'colored' },
  { quarter: 'Q2', name: 'MAY', colored: 'colored' },
  { quarter: 'Q2', name: 'JUN', colored: 'colored' },
];
const Q3 = [
  { quarter: 'Q3', name: 'JUL', colored: 'colored' },
  { quarter: 'Q3', name: 'AUG', colored: 'regular' },
  { quarter: 'Q3', name: 'SEP', colored: 'colored' },
];
const Q4 = [
  { quarter: 'Q4', name: 'OCT', colored: 'regular' },
  { quarter: 'Q4', name: 'NOV', colored: 'regular' },
  { quarter: 'Q4', name: 'DEC', colored: 'colored' },
];

function Calender({ showSidebar }) {
  return (
    <div className="calender-container">
      <Quarters months={Q1} showSidebar={showSidebar} />
      <Quarters months={Q2} showSidebar={showSidebar} />
      <Quarters months={Q3} showSidebar={showSidebar} />
      <Quarters months={Q4} showSidebar={showSidebar} />
    </div>
  );
}

export default Calender;
