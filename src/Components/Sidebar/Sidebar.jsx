import './sidebar.scss';

import {
  faBorderAll,
  faCalendar,
  faCalendarAlt,
  faColumns,
  faCube,
  faEnvelope,
  faExpand,
  faFeatherAlt,
  faPoll,
  faProjectDiagram,
  faStickyNote,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Sidebar() {
  return (
    <nav className="sidebar-container">
      <FontAwesomeIcon icon={faFeatherAlt} size="2x" />
      <hr />
      <FontAwesomeIcon icon={faBorderAll} size="1x" />
      <FontAwesomeIcon icon={faCalendar} size="1x" />
      <FontAwesomeIcon icon={faEnvelope} size="1x" />
      <FontAwesomeIcon icon={faUsers} size="1x" />
      <FontAwesomeIcon icon={faExpand} size="1x" />
      <FontAwesomeIcon icon={faCube} size="1x" />
      <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
      <FontAwesomeIcon icon={faColumns} size="1x" />
      <FontAwesomeIcon icon={faStickyNote} size="1x" />
      <FontAwesomeIcon icon={faPoll} size="1x" />
      <FontAwesomeIcon icon={faProjectDiagram} size="1x" />
    </nav>
  );
}

export default Sidebar;
