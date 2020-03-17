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
    <v-col class="text-right">
      <v-btn
        text
        small
        @click="onLogOut"
      >
        Log Out
      </v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  props: {
    open: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async onLogOut () {
      try {
        await this.logout()
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
<style scoped>
.capitalize {
  text-transform: capitalize;
}
</style>