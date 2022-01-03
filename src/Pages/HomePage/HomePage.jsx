import './homePage.scss';

import { faBullhorn, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import Calender from '../../Components/Calender/Calender';
import FilterComponent from '../../Components/FilterComponent/FilterComponent';
import Navbar from '../../Components/Navbar/Navbar';
import Searchbar from '../../Components/Searchbar/Searchbar';

const initialFilter = {
  product: [],
  indication: [],
  profile: {},
  promoMaterial: {},
  promoSubject: {},
};

function HomePage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState(initialFilter);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={
          showSidebar
            ? 'home-container sidebar-on'
            : 'home-container sidebar-off'
        }
      >
        <div className="home-container-header">
          <div className="home-container-title">
            <h1>Cardiology, A, Hospital-Policlinic</h1>
            <h2>Marketing / Visit Mix / Cardiology, A, Hospital-Policlinic </h2>
          </div>
          <div className="home-container-buttons">
            <button type="button">
              <FontAwesomeIcon icon={faUndo} size="1x" />
              <p>Back to page</p>
            </button>
            <button type="button">
              <FontAwesomeIcon icon={faBullhorn} size="1x" />
            </button>
          </div>
        </div>
        <div className="home-container-content">
          <Searchbar
            searchText={searchText}
            setSearchText={setSearchText}
            toggleFilter={toggleFilter}
            showFilter={showFilter}
          />
          {showFilter && (
            <FilterComponent
              filter={filter}
              setFilter={setFilter}
              initialFilter={initialFilter}
            />
          )}
          <Calender showSidebar={showSidebar} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
