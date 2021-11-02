<template>
  <div id="app">
    <m-header />
    <router-view />
    <m-footer />
  </div>
</template>

<script>
import MHeader from '@/components/Header'
import MFooter from '@/components/Footer'

export default {
  components: {
    MHeader,
    MFooter,
  },
}
</script>

<style lang="scss">
@import 'assets/layui/css/layui.css';
@import 'assets/css/global.css';
@import 'assets/layui/css/modules/layer/default/layer.css';
</style>
