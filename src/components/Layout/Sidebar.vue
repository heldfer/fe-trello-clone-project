<template>
  <v-navigation-drawer
    v-model="open"
    app
  >
    <v-list dense>
      <v-list-item :to="{ name: 'dashboard' }">
        <v-list-item-action>
          <v-icon>home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    open: {
      type: Boolean,
      default: true
    }
  }
};
</script>