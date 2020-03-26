<template>
  <v-container
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <boards-list :boards="boards" />
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <boards-create-form />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import BoardsCreateForm from '../components/Boards/CreateForm'
import BoardsList from '../components/Boards/List'

export default {
  name: "Boards",
  components: {
    BoardsCreateForm,
    BoardsList
  },
  computed: {
    ...mapGetters("boards", { findBoardsInStore: "find" }),
    ...mapState("boards", { creating: "iscreatePending" }),
    ...mapState("auth", { payload: 'payload' }),
    boards() {
      // Get the boards from the store
      const { data: boards } = this.findBoardsInStore({query: { ownerId: this.payload.user._id }})
      return boards;
    }
  },
  created() {
    // Fetch the boards from the server and save them in the store
    this.getBoards({query: { ownerId: this.payload.user._id }})
  },
  methods: {
    ...mapActions('boards', { getBoards: 'find' })
  }
};
</script>