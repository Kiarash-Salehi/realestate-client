import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="columns">
        <div className="col">
          <h3>راه های ارتباطی با ما:</h3>
          <ul>
            <li><a style={{ color: ' #fff' }} href={`mailto: example@gmail.com`}><i className="far fa-envelope"></i> example@gmail.com</a></li>
            <li><i className="fas fa-phone"></i> 000-000-000</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
