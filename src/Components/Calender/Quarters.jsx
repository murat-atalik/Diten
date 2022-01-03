import './quarters.scss';

import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import DraggableDays from './DraggableDays';

function Quarters({ months, showSidebar }) {
  const [pinIndex, setPinIndex] = useState('');

  const handlePin = (index) => {
    if (pinIndex === index) {
      setPinIndex('');
    } else {
      setPinIndex(index);
    }
  };

  return (
    <div className="App">
      <div className="quarter-container">
        {months.map((month) => (
          <div key={month.name}>
            <div className="quarter-header">
              <p>{month.quarter}</p> <h2>{month.name}</h2>
            </div>
            <div className="quarter-days">
              <DraggableDays
                showSidebar={showSidebar}
                colored={month.colored}
                color="blue"
                pinIndex={pinIndex}
                rowIndex={0}
              />
              <DraggableDays
                showSidebar={showSidebar}
                colored={month.colored}
                color="blue"
                pinIndex={pinIndex}
                rowIndex={1}
              />
              <DraggableDays
                showSidebar={showSidebar}
                colored={month.colored}
                color="blue"
                pinIndex={pinIndex}
                rowIndex={2}
              />
              <DraggableDays
                showSidebar={showSidebar}
                colored={month.colored}
                color="orange"
                pinIndex={pinIndex}
                rowIndex={3}
              />
              <DraggableDays
                showSidebar={showSidebar}
                colored={month.colored}
                color="orange"
                pinIndex={pinIndex}
                rowIndex={4}
              />
              <DraggableDays
                showSidebar={showSidebar}
                colored={month.colored}
                color="orange"
                pinIndex={pinIndex}
                rowIndex={5}
              />
            </div>
          </div>
        ))}
        <div className="quarter-days-pin">
          <button
            className={`quarter-days-pin-button${
              pinIndex === 0 ? '-active' : ''
            }`}
            type="button"
            onClick={() => handlePin(0)}
          >
            <FontAwesomeIcon icon={faThumbtack} size="1x" />
          </button>
          <button
            className={`quarter-days-pin-button${
              pinIndex === 1 ? '-active' : ''
            }`}
            type="button"
            onClick={() => handlePin(1)}
          >
            <FontAwesomeIcon icon={faThumbtack} size="1x" />
          </button>
          <button
            className={`quarter-days-pin-button${
              pinIndex === 2 ? '-active' : ''
            }`}
            type="button"
            onClick={() => handlePin(2)}
          >
            <FontAwesomeIcon icon={faThumbtack} size="1x" />
          </button>
          <button
            className={`quarter-days-pin-button${
              pinIndex === 3 ? '-active' : ''
            }`}
            type="button"
            onClick={() => handlePin(3)}
          >
            <FontAwesomeIcon icon={faThumbtack} size="1x" />
          </button>
          <button
            className={`quarter-days-pin-button${
              pinIndex === 4 ? '-active' : ''
            }`}
            type="button"
            onClick={() => handlePin(4)}
          >
            <FontAwesomeIcon icon={faThumbtack} size="1x" />
          </button>
          <button
            className={`quarter-days-pin-button${
              pinIndex === 5 ? '-active' : ''
            }`}
            type="button"
            onClick={() => handlePin(5)}
          >
            <FontAwesomeIcon icon={faThumbtack} size="1x" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Quarters;
