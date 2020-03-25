<template>
  <v-card>
    <v-card-title v-text="name" />
  </v-card>
</template>

<script>
export default {
  name: "BoardListsListItem",
  props: {
    name: {
      type: String,
      default: ""
    }
  }
}
</script>