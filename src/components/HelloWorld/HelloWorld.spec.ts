import { createPinia, setActivePinia } from 'pinia'

import { shallowMount } from '@vue/test-utils'

import Component from './index'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe(`${Component?.name}`, () => {
  it('component exists', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.exists()).toBeTruthy()
  })
})
