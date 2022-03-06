import { createTestingPinia } from '@pinia/testing'

import { mount, shallowMount } from '@vue/test-utils'

// @ts-expect-error
global.wrap = (Component, options) => {
  return mount(Component, {
    global: {
      mocks: {},
      plugins: [createTestingPinia()],
      components: {}
    },
    ...options
  })
}

// @ts-expect-error
global.shallowWrap = (Component, options) => {
  return shallowMount(Component, {
    global: {
      mocks: {},
      plugins: [createTestingPinia()],
      components: {}
    },
    ...options
  })
}
