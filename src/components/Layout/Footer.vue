<template>
  <v-footer color="indigo">
    <v-row
      align="center"
      justify="center"
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }} | Made with 💛 by Hélder Ferreira</span>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
