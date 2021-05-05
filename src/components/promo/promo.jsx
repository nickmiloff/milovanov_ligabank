import React from 'react';
import Link from '../link/link';

const Promo = () => (
  <section className="promo">
    <div className="container">
      <h2 className="promo__title">Лига Банк</h2>
      <h3 className="promo__slogan">Кредиты на любой случай</h3>
      <Link additionalClass="promo__link">Рассчитать кредит</Link>
    </div>
  </section>
);

export default Promo;
