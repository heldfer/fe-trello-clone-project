<template>
  <v-app id="inspire">
    <v-content>
      <slot />
    </v-content>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '@/components/Layout/TheFooter'

export default {
  name: 'NoSidebar',
  components: {
    TheFooter
  }
}
</script>