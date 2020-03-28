<template>
  <v-card
    @dragover.prevent
    @drop="onDragDrop"
  >
    <v-container>
      <v-row align="center">
        <cards-create-form
          :list-id="listId"
          :show="newCard"
          :on-save-card="onSaveCard"
        />
        
        <v-list-item
          v-for="card in cards"
          @dragstart="onDragStart(card)"
          draggable="true"
          two-line
          :key="card.id"
        >
          <v-list-item-content>
            <v-list-item-title v-html="card.title" />
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import CardsCreateForm from "./CreateForm";

export default {
  name: "CardsList",
  components: {
    CardsCreateForm
  },
  props: {
    newCard: {
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
    },
    list: {
      type: Object,
      required: true
    }
  },
  data: vm => ({
    startZone: null,
    cartDragged: null
  }),
  computed: {
    ...mapGetters("cards", { findCardsInStore: "find" }),
    ...mapState("board", ["draggingZone", "draggingCard"]),
    cards () {
      const { data } = this.findCardsInStore({
          query: { listId: this.listId }
        });
        return data;
    }
  },
  methods: {
    ...mapActions("cards", { patchCard: "patch" }),
    ...mapMutations("board", ["setDraggingZone"]),
    onDragStart (card) {
      this.setDraggingZone({ list: this.list, card })
    },
    onDragDrop () {
      if (this.draggingZone._id !== this.list._id) {
        this.draggingCard.listId = this.list._id
        this.draggingCard.save()
      }
    }
  }
};
</script>