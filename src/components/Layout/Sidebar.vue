<template>
  <v-navigation-drawer
    v-model="open"
    app
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="model"
      >
        <v-list-item
          v-for="(menuItem, i) in menus"
          :key="i"
          :to="{ name: menuItem.path }"
          link
        >
          <v-list-item-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menuItem.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
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
  },
  data: () => ({
    model: 0,
    menus: [
      {
        icon: "home",
        label: "Dashboard",
        path: "dashboard"
      },
      {
        icon: "table_chart",
        label: "Boards",
        path: "boards"
      },
    ]
  })
};
</script>