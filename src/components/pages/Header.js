import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import '../../assets/header.css';

function Header() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = monthNames[month];

  return (
    <div className="header" data-testid="header-component">
      <div data-testid="date" className="header-item">{`${year} ${monthName} ${day}`}</div>
      <div className="header-item middle-header">Level of Pollution in the Countries!</div>
      <div className="header-item last-header-item">
        <FontAwesomeIcon data-testid="header-icon" className="header-icon" icon={faMicrophone} />
        <FontAwesomeIcon data-testid="header-icon" className="header-icon" icon={faGear} />
      </div>
    </div>
  );
}

export default Header;
