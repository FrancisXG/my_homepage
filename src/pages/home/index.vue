<template>
  <n-message-provider>
    <calendar />
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import calendar from './components/calendar.vue'

export default defineComponent({
  components: {
    calendar
  }
})
</script>
