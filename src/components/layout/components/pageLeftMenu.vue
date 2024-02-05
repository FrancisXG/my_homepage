<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu :key="currentRouteName" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" :default-value="currentRouteName" />
  </n-layout-sider>
</template>

<script lang="ts">
import { h, ref, defineComponent, Component, watchEffect } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { HomeOutline as home, DesktopOutline as chat, BulbOutline } from '@vicons/ionicons5'
import { RouterLink, useRoute } from 'vue-router'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home'
          }
        },
        { default: () => '首页' }
      ),
    key: 'home',
    icon: renderIcon(home)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'chat'
          }
        },
        { default: () => 'chatGPT' }
      ),
    key: 'chat',
    icon: renderIcon(chat)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'tool'
          }
        },
        { default: () => '工具' }
      ),
    key: 'tool',
    icon: renderIcon(BulbOutline)
  }
]

export default defineComponent({
  setup() {
    const currentRoute = useRoute()
    let currentRouteName = ref()
    watchEffect(() => {
      currentRouteName.value = currentRoute.name
    })
    return {
      collapsed: ref(true),
      currentRouteName,
      menuOptions
    }
  }
})
</script>
