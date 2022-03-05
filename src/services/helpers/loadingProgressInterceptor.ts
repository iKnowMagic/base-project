/**
 * https://tinyurl.com/y6j8ns9s
 */

// import { loadingProgress } from '@/store'

import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

// const loadingProgressStore = loadingProgress()

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // store.loading++

  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // store.loading--

  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // store.loading--

  return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // store.loading--

  return Promise.reject(error)
}

export default (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
