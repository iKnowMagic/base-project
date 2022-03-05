// import loadingProgressInterceptor from '@/services/helpers/loadingProgressInterceptor'
import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import LRUCache from 'lru-cache'

const cacheConf = {
  max: 500,
  maxAge: Infinity
}

const timeout = 45000 // api call milliseconds

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const adapter = cacheAdapterEnhancer(axios.defaults.adapter, {
  enabledByDefault: false,
  defaultCache: new LRUCache(cacheConf)
})

const dataService = axios.create({
  baseURL: `${import.meta.env.VITE_APP_SETTINGS_API_DATA}`,
  withCredentials: true,
  timeout,
  headers,
  adapter
})

// loadingProgressInterceptor(dataService)

export { dataService }
