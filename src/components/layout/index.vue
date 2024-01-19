<template>
  <sideMenu>
    <template v-slot>
      <slot></slot>
    </template>
  </sideMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sideMenu from './components/sideMenu.vue'
export default defineComponent({
  name: 'layout',
  components: {
    sideMenu
  }
})
</script>
<style scoped>
.container {
  height: 100vh;
}
</style>
