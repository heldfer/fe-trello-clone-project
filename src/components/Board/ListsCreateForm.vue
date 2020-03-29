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
            @submit.prevent="createList"
          >
            <v-text-field
              v-model="list.name"
              :rules="rules.required"
              label="List Name"
              type="text"
            />
            <v-spacer />
            <v-row class="justify-center">
              <v-btn
                :disabled="!valid"
                type="submit"
                color="primary"
              >
                Create List
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
  name: "BoardListsCreateForm",
  data: vm => ({
    valid: false,
    list: {
      name: "",
      boardId: vm.$route.params.id
    },
    rules: {
      required: [value => !!value.trim().length || "Is required"]
    }
  }),
  computed: {
    ...mapState("lists", { creating: "iscreatePending" })
  },
  methods: {
    async createList() {
      if (this.valid) {
        try {
          const { List } = this.$FeathersVuex.api;
          const newList = await new List(this.list).save();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>
