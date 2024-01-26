<template>
  <n-layout-footer bordered position="absolute">
    <div class="footer-container">
      <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2024059804号-1</a>
    </div>
  </n-layout-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'pageFooter'
})
</script>
<style lang="scss" scoped>
.footer-container {
  height: 64px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  justify-content: center;
}
</style>
