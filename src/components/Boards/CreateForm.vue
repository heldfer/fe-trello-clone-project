<template>
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
                Create Board
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
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BoardsCreateForm",
  data: () => ({
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
    ...mapState("boards", { creating: "iscreatePending" })
  },
  methods: {
    async createBoard() {
      if (this.valid) {
        try {
          const { Boards } = this.$FeathersVuex.api;
          const newBoard = await new Boards(this.board).save();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>
