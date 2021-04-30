import React from 'react';

import logoImg from '../../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className="page__footer footer">
      <div className="container">
        <div className="footer__company-info">
          <a className="footer__logo logo" href="/">
            <img className="logo__img" src={logoImg} alt="Логотип банка - Лига Банк" width="150" height="27" />
          </a>
          <address className="footer__address">
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 &#169; Лига Банк, 2019
          </address>
        </div>
        <nav className="footer__nav secondary-nav">
          <ul className="secondary-nav__list">
            <li className="secondary-nav__item">
              <a className="secondary-nav__link" href="#">
                Услуги
              </a>
            </li>
            <li className="secondary-nav__item">
              <a className="secondary-nav__link" href="#">
                Рассчитать кредит
              </a>
            </li>
            <li className="secondary-nav__item">
              <a className="secondary-nav__link" href="#">
                Контакты
              </a>
            </li>
            <li className="secondary-nav__item">
              <a className="secondary-nav__link" href="#">
                Задать вопрос
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__phone phone">
          <a
            className="phone__title"
            href="tel:*0904">
            <svg width="16" height="16">
              <use xlinkHref="#mobile-phone"></use>
            </svg>
            *0904
          </a>
          <p className="phone__desc">
            Бесплатно для абонентов
            <br />
            МТС, Билайн, Мегафон, Теле2
          </p>
        </div>
        <div className="footer__phone phone">
          <a
            className="phone__title"
            href="tel:+78001112233">
            <svg width="16" height="16">
              <use xlinkHref="#landline-phone"></use>
            </svg>
            8 800 111 22 33
          </a>
          <p className="phone__desc">
            Бесплатный для всех
            <br />
            городов России
          </p>
        </div>
        <ul className="footer__socials socials">
          <li className="socials__item">
            <a className="socials__link" href="#">
              <svg width="9" height="16">
                <use xlinkHref="#fb"></use>
              </svg>
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#">
              <svg width="16" height="16">
                <use xlinkHref="#inst"></use>
              </svg>
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#">
              <svg width="16" height="13">
                <use xlinkHref="#twit"></use>
              </svg>
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#">
              <svg width="16" height="13">
                <use xlinkHref="#yt"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
