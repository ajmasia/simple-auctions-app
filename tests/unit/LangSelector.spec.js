import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import LangSelector from '@/components/shared/LangSelector'
import store from '@/store'

describe('LangSelector component', () => {
  it('when LangSelector data change from es to en, app lang change to en', () => {
    const wrapper = shallowMount(LangSelector, { store })
    wrapper.setData({ selectedLanguage: 'en' })
    expect(store.state.curLanguage).to.eql('en')
  })
  it('when LangSelector change value es to en, app lang change to en  ', () => {
    const wrapper = shallowMount(LangSelector, { store })
    const enSelected = wrapper.find({ name: 'BFormSelect' }).element
    enSelected.value = 'en'
    enSelected.dispatchEvent(new Event('change'))
    expect(store.state.curLanguage).to.eql('en')
  })
})
