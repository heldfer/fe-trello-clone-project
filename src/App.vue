<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import Default from '@/views/Layouts/Default'
import NoSidebar from '@/views/Layouts/NoSidebar'

export default {
  name: "App",
  components: {
    Default,
    NoSidebar
  },
  computed: {
    layout () {
      return `${this.$route.meta.layout || 'default'}`
    }
  }
};
</script>
