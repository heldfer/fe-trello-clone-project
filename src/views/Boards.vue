<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-row dense>
        <v-col
          v-for="board in boards"
          :key="board._id"
          cols="3"
        >
          <v-card>
            <v-img
              :src="board.background"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="board.name" />
            </v-img>

            <!-- <v-card-actions>
                  <v-spacer />

                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
            </v-card-actions>-->
          </v-card>
        </v-col>
      </v-row>
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
              <v-form
                v-if="!creating"
                v-model="valid"
                @keydown.prevent.enter
                @submit.prevent="createBoard"
              >
                <v-text-field
                  v-model="board.name"
                  :rules="rules.required"
                  label="Name"
                  type="text"
                />

                <v-text-field
                  v-model="board.background"
                  :rules="rules.required"
                  label="Background"
                  type="text"
                />

                <v-spacer />
                <v-row class="justify-center">
                  <v-btn
                    :disabled="!valid"
                    type="submit"
                    color="primary"
                  >
                    Create
                  </v-btn>
                </v-row>
              </v-form>
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

export default {
  name: "Boards",
  data: () => ({
    creating: false,
    show: true,
    valid: false,
    board: {
      name: "",
      background: ""
    },
    rules: {
      required: [value => !!value.trim().length || "Is required"]
    }
  }),
  computed: {
    ...mapGetters("boards", { findBoardsInStore: "find" }),
    ...mapState("auth", { user: 'payload' }),
    boards() {
      const { data: boards } = this.findBoardsInStore({query: { ownerId: this.user.user._id }})
      return boards;
    }
  },
  mounted() {
    this.findBoards({query: { ownerId: this.user.user._id }})
  },
  methods: {
    ...mapActions('boards', { findBoards: 'find' }),
    async createBoard() {
      if (this.valid) {
        try {
          const { Boards } = this.$FeathersVuex.api;
          const newBoard = await new Boards(this.board).save();
          console.log(newBoard);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
};
</script>