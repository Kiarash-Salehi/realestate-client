import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector(state => state.user);
  const openNav = () => {
    const navItemsContainer = document.getElementsByClassName('nav__items');
    navItemsContainer[0].classList.toggle('nav__active');
  };
  return (
    <nav className="nav">
      <h1 className="nav__logo"><Link to="/">مشاورین املاک</Link></h1>
      <div className="nav__hamburger" onClick={openNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav__items">
        <Link to="/"><div className="nav__item">صفحه اصلی</div></Link>
        <Link to="/listings"><div className="nav__item">لیست خانه ها</div></Link>
        <Link to="/aboutus"><div className="nav__item">درباره ما</div></Link>
        <Link to="/contactus"><div className="nav__item">ارتباط با ما</div></Link>
        {user.isAuthenticated ? <Link to="/dashboard"><div className="nav__item">داشبورد</div></Link> : <Link to="/authenticate"><div className="nav__item">ورود به حساب کاربری</div></Link>}
      </div>
    </nav>
  );
}

export default Header;
