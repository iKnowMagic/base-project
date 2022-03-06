import Component from '../App.vue'

describe('App', () => {
  it('Component exists', () => {
    // @ts-expect-error
    const wrapper = shallowWrap(Component)
    expect(wrapper.exists()).toBeTruthy()
  })
})
