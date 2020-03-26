<template>
  <v-card :to="{ name: 'board', params: { id } }">
    <v-img
      :src="background"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="name" />
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "BoardsListItem",
  props: {
    background: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>