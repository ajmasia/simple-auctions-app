import { appConfig } from '../../config'

export const currencyFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: appConfig.currency,
  minimumFractionDigits: appConfig.currencyDigits,
})
