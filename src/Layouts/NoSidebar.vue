<template>
  <v-app id="inspire">
    <v-content>
      <slot />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Layout/Footer'

export default {
  name: 'NoSidebar',
  components: {
    Footer
  }
}
</script>