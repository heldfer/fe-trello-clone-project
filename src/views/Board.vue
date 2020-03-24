<template>
  <v-container
    fluid
  >
    <!-- <v-row
      align="center"
      justify="center"
    /> -->
    {{ name }}
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: "Board",
  data: () => ({
    name: ''
  }),
  async created () {
    try {
      const response = await this.getBoard(this.$route.params.id)
      console.log(response)
      this.name = response.name
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    ...mapActions("boards", { getBoard: "get" }),
  }
}
</script>