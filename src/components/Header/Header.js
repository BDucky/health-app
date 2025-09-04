import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="logo">
        Healthy
      </Link>
      
      <nav className="nav">
        <Link 
          to="/my-record" 
          className={`nav-item ${location.pathname === '/my-record' ? 'active' : ''}`}
        >
          <span className="nav-icon">📝</span>
          自分の記録
        </Link>
        
        <Link 
          to="/column" 
          className={`nav-item ${location.pathname === '/column' ? 'active' : ''}`}
        >
          <span className="nav-icon">🏆</span>
          チャレンジ
        </Link>
        
        <Link 
          to="#" 
          className="nav-item"
        >
          <span className="nav-icon">📢</span>
          お知らせ
        </Link>
        
        <div className="header-actions">
          <button className="menu-button">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
