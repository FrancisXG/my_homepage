<template>
  <div class="card-content">
    <n-card title="二维码生成装置">
      <n-space vertical>
        <n-qr-code :value="text" />
        <n-input v-model:value="text" :maxlength="60" type="text" />
      </n-space>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'tool',
  setup() {
    const text = ref('')
    return {
      text
    }
  }
})
</script>

<style lang="scss" scoped>
.card-content {
  width: 300px;
}
</style>
