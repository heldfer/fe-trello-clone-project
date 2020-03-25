<template>
  <v-row dense>
    <v-col
      v-for="list in lists"
      :key="list._id"
      cols="3"
    >
      <board-lists-list-item
        :name="list.name"
      />
    </v-col>
  </v-row>
</template>

<script>
import BoardListsListItem from "./BoardListsListItem"

export default {
  name: "BoardListsList",
  components: { BoardListsListItem },
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  }

}
</script>