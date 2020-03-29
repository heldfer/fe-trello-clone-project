<template>
  <v-list-item v-if="show">
    <v-list-item-content>
      <v-form
        v-if="!creating"
        v-model="valid"
        @keydown.prevent.enter
        @submit.prevent="createCard"
      >
        <v-container>
          <v-row align="center">
            <v-col cols="9">
              <v-text-field
                v-model="card.title"
                :rules="rules.required"
                label="Title"
                type="text"
              />
            </v-col>
            <v-col cols="3">
              <v-btn
                :disabled="!valid"
                color="primary"
                type="submit"
                text
                small
              >
                Save
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-progress-circular
        v-if="creating"
        indeterminate
        color="primary"
      />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "CardsCreateForm",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    listId: {
      type: String,
      required: true
    },
    onSaveCard: {
      type: Function,
      default: () => 1
    }
  },
  computed: {
    ...mapState("cards", { creating: "iscreatePending" })
  },
  data: vm => ({
    valid: false,
    rules: {
      required: [value => !!value.trim().length || "Is required"]
    },
    card: {
      title: '',
      description: '',
      order: 0,
      archived: false,
      listId: vm.listId,
      boardId: vm.$route.params.id
    },
  }),
  methods: {
    async createCard () {
      if (this.valid) {
        try {
          const { Card } = this.$FeathersVuex.api;
          const newList = await new Card(this.card).save();
          this.card.title = ''
          this.onSaveCard()
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>
