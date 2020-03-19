<template>
  <v-container
    class="fill-height"
    fluid
  >
    {{ boards }}
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
        <v-row
          align="center"
          justify="center"
        >
          <v-card-title>
            Create a new Board
          </v-card-title>
        </v-row>
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
import { mapGetters } from 'vuex';

export default {
  name: 'Boards',
  data: () => ({
    creating: false,
    show: true,
    valid: false,
    board: {
      name: '',
      background: ''
    },
    rules: {
      required: [value => !!value.trim().length || "Is required"]
    }
  }),
  computed: {
    ...mapGetters('boards', { findBoards: 'find' } ),
    boards () {
      return this.findBoards().data
    }
  },
  methods: {
    async createBoard () {
      if (this.valid) {
        try {
          const { Boards } = this.$FeathersVuex.api;
          const newBoard = await new Boards(this.board).save();
          console.log(newBoard)
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
};
</script>