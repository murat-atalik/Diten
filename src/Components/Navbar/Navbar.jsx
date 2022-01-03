import './navbar.scss';

import {
  faAngleDown,
  faBars,
  faBell,
  faBug,
  faChevronLeft,
  faExpand,
  faInfo,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import flag from '../../assets/images/flag.svg';
import Sidebar from '../Sidebar/Sidebar';

function Navbar({ showSidebar, setShowSidebar }) {
  const toggleModal = () => setShowSidebar(!showSidebar);

  return (
    <nav className="navbar-container">
      <div className="navbar-container-left">
        {!showSidebar && (
          <button className="open-menu" type="button" onClick={toggleModal}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        )}
        {showSidebar && (
          <button className="close-menu" type="button" onClick={toggleModal}>
            <FontAwesomeIcon icon={faBars} size="2x" />
            <FontAwesomeIcon
              className="close-menu-arrow"
              icon={faChevronLeft}
            />
          </button>
        )}
        {showSidebar && <Sidebar />}
      </div>
      <div className="navbar-container-right">
        <button type="button">
          <img src={flag} alt="flag" className="navbar-container-flag" />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faBug} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faExpand} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faInfo} />
        </button>
        <button type="button" className="navbar-container-user">
          <FontAwesomeIcon className="avatar" icon={faUserCircle} size="3x" />
          <h2>Diten Technology</h2>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
