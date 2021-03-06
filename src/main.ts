import { createApp } from 'vue'

import '@/styles/index.scss'

import store from '@/store'

import mitt from 'mitt'

import router from '@/router'

import App from './App.vue'
import FontAwesomeIcon from './fontawesome'

// if (import.meta.env.MODE === 'development') {
// import VConsole from 'vconsole'
//   const vConsole = new VConsole()
// }

const mountApp = async () => {
  const app = createApp(App)

  const emitter = mitt()

  app.use(router).use(store).component('FontAwesomeIcon', FontAwesomeIcon)
  //   .use(i18n)

  app.config.globalProperties.emitter = emitter

  await router.isReady()
  app.mount('#app')
}

mountApp()
