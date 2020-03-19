<template>
  <v-container
    class="fill-height"
    fluid
  >
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
        <v-card-actions>
          <v-row
            align="center"
            justify="center"
          >
            <v-btn
              color="primary"
              @click="show = !show"
            >
              Create
            </v-btn>
          </v-row>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider />

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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
    show: false
  }),
  computed: {
    ...mapGetters('boards', { findBoards: 'find' } ),
    boards () {
      return this.findBoards().data
    }
  }
};
</script>