import React, { Component } from 'react';
import logo from '../assets/logo.svg';

const Header = ({  }) => {
	return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src={ logo } alt="chat" width="112" height="28" className="chat-logo"/>
            </a>
          </div>
          <div className="navbar-menu">
            
          </div>
        </nav>
	)
};

export default Header
