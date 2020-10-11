import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector(state => state.user);
  return (
    <nav className="nav">
      <h1 className="nav__logo"><Link to="/">مشاورین املاک</Link></h1>
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
