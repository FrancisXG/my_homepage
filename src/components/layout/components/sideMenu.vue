<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = true"
      >
        <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" :render-label="renderMenuLabel" />
      </n-layout-sider>
      <n-layout>
        <slot></slot>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { h, ref, defineComponent, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { HomeOutline as Home, HammerOutline as Tool, DesktopOutline as Technology } from '@vicons/ionicons5'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'Home',
    icon: renderIcon(Home)
  },
  {
    label: '技术',
    key: 'Technology',
    icon: renderIcon(Technology)
  },
  {
    label: '工具',
    key: 'Tool',
    icon: renderIcon(Tool)
  }
]

export default defineComponent({
  setup() {
    return {
      collapsed: ref(true),
      menuOptions,
      renderMenuLabel(option: MenuOption) {
        if ('href' in option) {
          return h('a', { href: option.href, target: '_blank' }, option.label as string)
        }
        return option.label as string
      }
    }
  }
})
</script>
