import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

import breakpoints from './windi.breakpoints'

export default defineConfig({
  theme: {
    screens: breakpoints,
    fontSize: {
      base: '16px'
    },
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      mono: ['Space Mono', 'monospace']
    },

    colors: {
      gray: colors.gray,
      dark: colors.dark,
      blue: colors.blue,
      sky: colors.sky,
      'blue-gray': colors.blueGray,
      design: {
        theme: 'var(--theme-color)',
        '1': '#F87070',
        '2': '#70F3F8',
        '3': '#D881F8',
        '4': '#D7E0FF',
        '5': '#1E213F',
        '6': '#FFFFFF',
        '7': '#EFF1FA',
        '8': '#161932'
      }
    }
  },
  shortcuts: {}
})
