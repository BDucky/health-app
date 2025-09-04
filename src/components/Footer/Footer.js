import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" className="footer-link">会員登録</a>
          <a href="#" className="footer-link">運営会社</a>
          <a href="#" className="footer-link">利用規約</a>
          <a href="#" className="footer-link">個人情報の取扱について</a>
          <a href="#" className="footer-link">特定商取引法に基づく表記</a>
          <a href="#" className="footer-link">お問い合わせ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
