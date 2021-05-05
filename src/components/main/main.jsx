import React from 'react';
import Converter from '../converter/converter';
import Promo from '../promo/promo';

const Main = () => (
  <main className="page__main">
    <h1 className="visually-hidden">Лига банк - страница &quot;Конвертер валют&quot;</h1>
    <Promo />
    <Converter />
  </main>
);

export default Main;
