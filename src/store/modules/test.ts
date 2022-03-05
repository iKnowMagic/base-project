import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTest = defineStore('useTest', {
  state: () => ({
    hello: 'hello'
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTest, import.meta.hot))
}
