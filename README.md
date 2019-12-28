<p align="center">
  <a href="http://github.com/kamranahmedse/developer-roadmap">
    <img src="https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-flat-icons/250/web-code.png" alt="Auction app" width="96" height="96">
  </a>
  <h2 align="center">Auction App</h2>
  <p align="center">Playing with Vue.js</p>
</p>

# Table of content

- [Table of content](#table-of-content)
  - [Install](#install)
    - [Clone this repo](#clone-this-repo)
    - [Playing](#playing)
  - [Documentation](#documentation)
  - [App config](#app-config)
  - [Technologies](#technologies)
  - [Changelog](#changelog)
    - [Version 0.1.0](#version-010)

## Install

To test the app, please follow the next steps:

### Clone this repo

Using SSH: `git clone https://github.com/ajmasia/simple_auctions_app.git`

Ussing HTTPS: `git clone git@github.com:ajmasia/simple_auctions_app.git`

### Playing

| Commad                  | Description                        |
| ----------------------- | ---------------------------------- |
| `npm i`                 | Install project dependences        |
| `npm run serve`         | Run app in dev mode                |
| `npm run build`         | Build app                          |
| `npm run test:unit`     | Run app tests                      |
| `npm run test:unit:dev` | Run app testis in dev mode         |
| `npm run lint`          | Run linter tool to fix code issues |

## Documentation

This project it's a simple auction application. As a buyer, you have to enter the maximum price you are willing to pay for a product, and as a seller, you have to enter the minimum price for which you are willing to sell the product. Finally, the app will show your the result in a simple popup.

If you are in the middle of an auction and return to the home, the user receives a notification.

## App config

This project use the OpenWeather API to get cities weather data. You will need a valid API key to use it. Currently the project use a `setTimeout` to simulate a Delay while the app receive new data and can show an spinner. Ideally, make the call to the api at the beginning of the app.

Before run the app, you have to install all project dependences and set the config file renaming the `example.config.js` to `config.js`:

```js
export const appConfig = {
  openWeatherAPIKey: '',
  openWeatherAPIUrl: 'http://api.openweathermap.org/data/2.5/',
  coords: {
    lat: null,
    long: null,
  },
  units: 'metric',
  tempUnit: 'Cº',
  lang: 'es',
  currency: 'EUR',
  currencyDigits: 2,
}
```

To get the data from `Huesca`, you need to config this coords:

```json
{
  lat: 42.1382,
  long: -0.4081,
},
```

## Technologies

This project use the next tecnologies:

- [Vue.js](https://vuejs.org/) as project core technology.
- [Vuex](https://vuex.vuejs.org/guide/) to project state management.
- [Vue router](https://router.vuejs.org/) to app routing.
- [Vuelidate](https://github.com/vuelidate/vuelidate) to validate forms.
- [Vuex-i18n](https://github.com/dkfbasel/vuex-i18n) to project localization.
- [Vue Boostrap](https://bootstrap-vue.js.org/) to project components.
- [v-animate-css](https://github.com/jofftiquez/v-animate-css) to use css animations
- [eslint](https://eslint.org/) to find and fix problems in your JavaScript code
- [Prettier](https://prettier.io/) to code format
- [Husky](https://github.com/typicode/husky) to prevent bad code before push code to the repo

## Changelog

### Version 0.1.0

- Initial app version includes localization using [Vuex-i18n](https://github.com/dkfbasel/vuex-i18n) to project localization.

---

[License](./LICENSE.md)
