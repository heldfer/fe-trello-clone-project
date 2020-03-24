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
      <v-card
        class="mx-auto"
        min-width="400"
        max-width="400"
        outlined
      >
        <v-expand-transition>
          <div class="text-center">
            <v-divider />

            <v-card-text>
              <boards-create-form />
              <v-progress-circular
                v-if="creating"
                indeterminate
                color="primary"
              />
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import BoardsCreateForm from '../components/BoardsCreateForm'
import BoardsList from '../components/BoardsList'

export default {
  name: "Boards",
  components: {
    BoardsCreateForm,
    BoardsList
  },
  computed: {
    ...mapGetters("boards", { findBoardsInStore: "find" }),
    ...mapState("boards", { creating: "iscreatePending" }),
    ...mapState("auth", { user: 'payload' }),
    boards() {
      const { data: boards } = this.findBoardsInStore({query: { ownerId: this.user.user._id }})
      return boards;
    }
  },
  created() {
    this.findBoards({query: { ownerId: this.user.user._id }})
  },
  methods: {
    ...mapActions('boards', { findBoards: 'find' })
  }
};
</script>