export const state = {
  auction: {},
  weather: {},
  weatherError: null,
  curLanguage: 'es',
  languages: [
    {
      locale: 'en',
      text: 'English',
    },
    {
      locale: 'es',
      text: 'Español',
    },
  ],
}

export const initialAuctionState = {
  buyer: {
    value: null,
    active: true,
    disabled: false,
  },
  seller: {
    value: null,
    active: false,
    disabled: true,
  },
  success: null,
}
