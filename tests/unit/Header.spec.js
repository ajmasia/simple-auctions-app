import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/shared/Header'
import store from '@/store'

describe('Header component', () => {
  it('his name is App ', () => {
    const wrapper = shallowMount(Header, { store })
    expect(wrapper.name()).to.eql('app-header')
  })
})
