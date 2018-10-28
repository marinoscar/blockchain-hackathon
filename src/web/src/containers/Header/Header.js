import React from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/coffee_bean.png';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            className="d-inline-block align-top logo-brand"
            alt=""
          />
        </a>
        <h1 className="title text-white">Golden Bean Tracker</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse multi-collapse"
          id="navbarToggler"
        />
      </nav>
    );
  }
}

const header = connect()(Header);
export { header as Header };
