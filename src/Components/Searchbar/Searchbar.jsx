import './searchbar.scss';

import {
  faExpandArrowsAlt,
  faExternalLinkAlt,
  faSearch,
  faSort,
  faTable,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Searchbar({ searchText, setSearchText, toggleFilter, showFilter }) {
  return (
    <div className="search-bar">
      <div className="search-bar-search-input">
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} size="1x" />
      </div>
      <div className="search-bar-buttons">
        <button type="button">Send to approval</button>
        <button type="button">pre-plan</button>
        <div className="dummy-button">
          <button type="button">
            <FontAwesomeIcon icon={faExpandArrowsAlt} size="1x" />
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faTable} size="1x" />
          </button>
        </div>

        <button
          type="button"
          className={showFilter ? 'filter-button-on' : 'filter-button-off'}
          onClick={toggleFilter}
        >
          <p>Filter</p>
          <FontAwesomeIcon icon={faSort} size="1x" />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
