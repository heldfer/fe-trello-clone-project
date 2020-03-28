const state = {
  draggingZone: null,
  draggingCard: null
}

const mutations = {
  setDraggingZone (state, { list, card }) {
    state.draggingZone = list
    state.draggingCard = card
  }
}


export default {
  namespaced: true,
  state,
  mutations
}