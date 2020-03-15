<template>
  <v-app id="inspire">
    <Header
      :open="open"
      name="Teste"
      @onSidebarBtnClick="open = !open"
    />
    <Sidebar :open="open" />
    <v-content>
      <slot />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import Footer from '@/components/Layout/Footer'

export default {
  name: 'Default',
  components: {
    Header,
    Sidebar,
    Footer
  },
  data: () => ({ open: true })
}
</script>