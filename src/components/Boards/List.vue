<template>
  <v-row dense>
    <v-col
      v-for="board in boards"
      :key="board._id"
      cols="3"
    >
      <boards-list-item
        :id="board._id"
        :background="board.background"
        :name="board.name"
      />
    </v-col>
  </v-row>
</template>

<script>
import BoardsListItem from "./ListItem"

export default {
  name: "BoardsList",
  components: { BoardsListItem },
  props: {
    boards: {
      type: Array,
      default: () => []
    }
  }

}
</script>