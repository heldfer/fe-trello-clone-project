const state = {
  draggingZone: null,
  draggingCard: null,
  cardSelected: null,
  showDetails: false,
}

const mutations = {
  setDraggingZone (state, { list, card }) {
    state.draggingZone = list
    state.draggingCard = card
  },
  setCardSelected (state, card) {
    state.cardSelected = card
  },
  toggleCardShowDetails (state, show) {
    state.showDetails = show
  }
}

export default {
  namespaced: true,
  state,
  mutations
}