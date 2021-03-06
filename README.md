# Задание «HTML Academy. Грейдирование»
## Проект «Лига Банк»

Выполнил: [Никита Милованов](https://up.htmlacademy.ru/react/6/user/1478835).

---

[Просмотреть сайт на githunb pages](https://nickmiloff.github.io/milovanov_ligabank/)

---

### Скриншоты

![Главная страница](https://i.imgur.com/Ha2o1CE.png)
![Конвертер](https://i.imgur.com/vPvi4UU.png)

---

### «Почему именно так?»

- Мной был выбран следующий инструмент автоматизации - `create-react-app`
_Один из наиболее быстрых и удобных способов развернуть React приложение с нуля в короткие сроки_

- В качестве препроцессора был выбран Sass (SCSS)
_Для успешной интеграции SCSS в мой проект потребовалось установить дополнительный пакет - `node-sass`_

- Контроль кода производился с помощью `ESLint`, `Editorconfig` и `Stylelintr`
_Мной были взяты конфиги HTML Academy - `eslint-config-htmlacademy` и `stylelint-config-htmlacademy`_

- Favicon сайта была изменена на логотип из макета

- Логотип был взят как svg картинка вместе с текстом "ЛИГА Банк"
_Логотип был взят вместе с сопутствующим текстом, так как текст является его частью. Мы всегда хотим видеть логотип в том виде, в котором он должен быть, а шрифт логотипа может не подгрузится, именно поэтому был взят логотип вместе с текстом_

- fonts, img не находятся в папке public из-за проблем CRA 4 с абсолютными путями
_https://github.com/facebook/create-react-app/issues/9870 и https://github.com/facebook/create-react-app/issues/9937 . Основные рекомендации в такой ситуации были: перенести шрифты, изображения и т.п. в src. Именно поэтому они располагаются в папке src/assets_
_https://create-react-app.dev/docs/adding-images-fonts-and-files/_

- В качестве календаря был выбран `react-datepicker`
_Адаптированная под React версия datepicker_

- Для удобного использования redux, был установлен `@reduxjs/toolkit`

- Для удобной работой с сервера был использован пакет `axios`

- Для получения курса валют был выбран сервис - [Rates API](https://ratesapi.io/)
_Один из бесплатных api предоставляющих информацию о курсе валют. Полный список api - [ссылка](https://github.com/public-apis/public-apis#currency-exchange)_

---

### Затраченное время

- Поиск информации - 2 часа
- Настройка автоматизации - 1 час
- Верстка - 8 часов
- React - 5 часов

Суммарно - 16 часов
