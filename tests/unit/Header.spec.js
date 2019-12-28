import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/shared/Header'
import LangSelector from '@/components/shared/LangSelector'
import store from '@/store'

describe('Header component', () => {
  const wrapper = shallowMount(Header, { store })
  const langSelectorWrapper = shallowMount(LangSelector, { store })
  const enSelected = langSelectorWrapper.find('b-form-select').element

  it('his name is App ', () => {
    expect(wrapper.name()).to.eql('app-header')
  })
  it('it renders LangSelector component', () => {
    expect(wrapper.contains(LangSelector)).is.true
  })
  it('when LangSelector data change from es to en, app lang change to en', () => {
    langSelectorWrapper.setData({ selectedLanguage: 'en' })
    expect(store.state.curLanguage).to.eql('en')
  })
  it('when LangSelector change value es to en, app lang change to en  ', () => {
    enSelected.value = 'en'
    enSelected.dispatchEvent(new Event('change'))
    expect(store.state.curLanguage).to.eql('en')
  })
})
