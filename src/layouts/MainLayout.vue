<template>
  <div class="w-full h-full font-sans">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

import { useBreakpoints } from '@vueuse/core'

// @ts-expect-error js breakpoints
import bkpoints from '../../windi.breakpoints'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const breakpoints = useBreakpoints(bkpoints)
    const sm = breakpoints.smaller('md')
    const md = breakpoints.between('md', 'lg')
    const lg = breakpoints.greater('lg')
    const mq = { sm, md, lg }
    provide('mq', mq)
  }
})
</script>

<style>
:root {
}
</style>
