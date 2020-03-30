<template>
  <v-navigation-drawer
    :value="showDetails"
    @input="toggleCardShowDetails"
    absolute
    temporary
    right
    class="pa-3"
  >
    <v-form
      v-if="!updating"
      v-model="valid"
      @keydown.prevent.enter
      @submit.prevent="updateCard"
    >
      <v-text-field
        v-model="form.cardTitle"
        :rules="rules.required"
        label="Title"
        type="text"
      />
      <v-text-field
        v-model="form.cardDescription"
        label="Description"
        type="text"
      />
      <v-btn
        :disabled="!valid"
        block
        color="primary"
        type="submit"
        small
      >
        Save
      </v-btn>
    </v-form>
    <v-progress-circular
      v-if="updating"
      indeterminate
      color="primary"
    />
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "BoardSidebar",
  computed: {
    ...mapState("board", ["showDetails", "cardSelected"]),
    ...mapState("cards", { updating: "isPatchPending" })
  },
  data: () => ({
    valid: false,
    rules: {
      required: [value => !!value.trim().length || "Is required"]
    },
    form: {
      cardTitle: "",
      cardDescription: ""
    }
  }),
  watch: {
    showDetails(open) {
      if (!open) {
        return;
      }
      this.form.cardTitle = this.cardSelected.title;
      this.form.cardDescription = this.cardSelected.description;
    }
  },
  methods: {
    ...mapMutations("board", ["toggleCardShowDetails"]),
    async updateCard() {
      if (!this.valid) {
        return;
      }

      try {
        this.cardSelected.title = this.form.cardTitle;
        this.cardSelected.description = this.form.cardDescription;
        await this.cardSelected.save();
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
</style>