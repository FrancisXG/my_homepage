<template>
  <n-layout-header bordered>
    <div class="content-info">
      <n-icon size="30" color="#0e7a0d">
        <game-controller />
      </n-icon>
      <div class="info-title">页面施工中。。。</div>
    </div>
  </n-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { GameController } from '@vicons/ionicons5'

export default defineComponent({
  name: 'pageHeader',
  components: {
    GameController
  },
  setup() {
    const router = useRouter()
    return {
      handleBack() {
        router.back()
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.content-info {
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;

  .info-title {
    margin-left: 12px;
  }
}
</style>
