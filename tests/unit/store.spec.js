import { expect } from 'chai'

import store from '@/store'
import * as mutations from '@/store/store.mutations'
import { initialAuctionState } from '@/store/store.state.js'

describe('App store', () => {
  it('auction default state is empty', () => {
    expect(store.state.auction).to.eql({})
  })

  it('initialize state', () => {
    mutations.initializeAppState(store.state, initialAuctionState)
    expect(store.state.auction).to.eql(initialAuctionState)
  })

  it('set action success state to true', () => {
    mutations.setSuccess(store.state, true)
    expect(store.state.auction.success).is.true
  })

  it('set action success state to false', () => {
    mutations.setSuccess(store.state, false)
    expect(store.state.auction.success).is.false
  })
})
