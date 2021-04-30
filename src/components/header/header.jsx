import React from 'react';

import logoImg from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="container">
        <a className="header__logo logo" href="/">
          <img className="logo__img" src={logoImg} alt="Логотип банка - Лига Банк" width="150" height="27" />
        </a>
        <nav className="header__nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">
                Услуги
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">
                Рассчитать кредит
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link--active" href="#">
                Конвертер валют
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">
                Контакты
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">
                Задать вопрос
              </a>
            </li>
          </ul>
          <a className="main-nav__link main-nav__login" href="#">
            <svg width="20" height="22">
              <use xlinkHref="#login"></use>
            </svg>
            Войти в Интернет-банк
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
