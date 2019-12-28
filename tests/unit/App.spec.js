import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import Header from '@/components/shared/Header'

import store from '@/store'
import router from '@/router'

describe('App component', () => {
  const wrapper = shallowMount(App, { store, router })
  const headerWrapper = shallowMount(Header, { store })
  it('his name is App ', () => {
    expect(wrapper.name()).to.eql('App')
  })
  it('it renders Header component', () => {
    expect(wrapper.contains(Header)).is.true
  })
  it('header renders a correct title', () => {
    expect(headerWrapper.html()).to.contain('Subastas app')
  })
  it('initial language is es', () => {
    expect(store.state.curLanguage).to.eql('es')
  })
})
