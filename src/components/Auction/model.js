import Vue from 'vue'
import { currencyFormatter } from '../../tools/index'

export const getModalText = (buyerValue, sellerValue) => {
  return `${Vue.i18n.translate('modal_text_01')}: ${currencyFormatter.format(
    buyerValue
  )} ${Vue.i18n.translate('modal_text_02')} ${currencyFormatter.format(
    sellerValue
  )}. ${Vue.i18n.translate('modal_text_03')} ${currencyFormatter.format(
    buyerValue - sellerValue
  )}`
}

export const generateModal = (state, modalRef, modalConfig) => {
  const { buyer, seller, success } = state.auction
  const modalContent = getModalText(buyer.value, seller.value)

  if (success) {
    modalConfig.title = `${Vue.i18n.translate('awared')}`
    modalConfig.content = modalContent
    return modalRef.show()
  }

  if (success === false) {
    modalConfig.title = `${Vue.i18n.translate('lost')}`
    modalConfig.content = modalContent
    return modalRef.show()
  }
}
