<template>
  <n-layout position="absolute">
    <page-header></page-header>
    <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
      <page-left-menu></page-left-menu>
      <page-main></page-main>
    </n-layout>
    <page-footer></page-footer>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageLeftMenu from './components/pageLeftMenu.vue'
import pageHeader from './components/pageHeader.vue'
import pageMain from './components/pageMain.vue'
import pageFooter from './components/pageFooter.vue'
export default defineComponent({
  name: 'layout',
  components: {
    pageLeftMenu,
    pageHeader,
    pageMain,
    pageFooter
  }
})
</script>
<style scoped></style>
