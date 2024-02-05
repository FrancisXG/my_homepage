<template lang="">
  <div>
    <iframe class="iframe-content"></iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'chat'
})
</script>
<style lang="scss" scoped>
.iframe-content {
  width: 100%;
  height: 80vh;
  position: relative;
  border: none;
}
</style>
