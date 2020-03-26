<template>
  <v-card>
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="10">
          <v-card-title v-text="name" />
        </v-col>
        <v-col cols="2">
          <v-btn icon>
            <v-icon>add_box</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
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