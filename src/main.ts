import { createApp } from 'vue'

import '@/styles/index.scss'

import store from '@/store'

import mitt from 'mitt'

import App from './App.vue'

// if (import.meta.env.MODE === 'development') {
// import VConsole from 'vconsole'
//   const vConsole = new VConsole()
// }

const mountApp = async () => {
  const app = createApp(App)

  const emitter = mitt()

  app
    //   .use(router)
    .use(store)
  //   .use(i18n)

  app.config.globalProperties.emitter = emitter

  // await router.isReady()
  app.mount('#app')
}

mountApp()
