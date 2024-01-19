<template>
  <div class="container">
    <layout>
      <template v-slot>
        <div class="container-content">
          <router-view />
        </div>
      </template>
    </layout>
  </div>
</template>
<style scoped></style>
<script lang="ts">
import { defineComponent } from 'vue'
import layout from '@/components/layout/index.vue'
export default defineComponent({
  components: {
    layout
  }
})
</script>
