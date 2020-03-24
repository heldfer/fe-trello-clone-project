<template>
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
