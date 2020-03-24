<template>
  <v-app id="inspire">
    <the-header
      :open="open"
      name="Teste"
      @onSidebarBtnClick="open = !open"
    />
    <the-sidebar :open="open" />
    <v-content>
      <slot />
    </v-content>
    <the-footer />
  </v-app>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader'
import TheSidebar from '@/components/Layout/TheSidebar'
import TheFooter from '@/components/Layout/TheFooter'

export default {
  name: 'Default',
  components: {
    TheHeader,
    TheSidebar,
    TheFooter
  },
  data: () => ({ open: true })
}
</script>