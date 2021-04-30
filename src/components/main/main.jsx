import React from 'react';
import Converter from '../converter/converter';
import Promo from '../promo/promo';

const Main = () => {
  return (
    <main className="page__main">
      <h1 className="visually-hidden">Лига банк - страница &quot;Конвертер валют&quot;</h1>
      <Promo />
      <Converter haveValue={1000} haveCurrency="RUB" wantValue={13.1234} wantCurrency="USD" />
    </main>
  );
};

export default Main;
