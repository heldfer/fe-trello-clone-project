<template>
  <v-container>
    <v-card>
      <v-row align="center">
        <v-col cols="10">
          <v-card-title v-text="name" />
        </v-col>
        <v-col cols="2">
          <v-btn
            color="primary"
            @click="newCard = !newCard"
            icon
          >
            <v-icon>{{ newCard ? 'remove' : 'add_box' }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <cards-list
      :new-card="newCard"
      :list-id="listId"
      :list="list"
      :on-save-card="() => newCard = false"
    />
  </v-container>
</template>

<script>
import CardsList from './Cards/List'

export default {
  name: "BoardListsListItem",
  components: {
    CardsList
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    listId: {
      type: String,
      required: true
    },
    list: {
      type: Object,
      required: true
    }
  },
  data: vm => ({
    newCard: false
  })
};
</script>