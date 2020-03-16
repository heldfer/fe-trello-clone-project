<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-btn
      icon
      @click.stop="$emit('onSidebarBtnClick')"
    >
      <v-icon>{{ open ? 'menu_open' : 'menu' }}</v-icon>
    </v-btn>
    <v-toolbar-title class="capitalize">
      {{ $route.name }}
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    open: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
.capitalize {
  text-transform: capitalize;
}
</style>