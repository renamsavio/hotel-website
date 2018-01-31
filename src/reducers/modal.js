const INITIAL_STATE = {
  modalIsOpen: false,
  priceHistory: []
}

export const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        modalIsOpen: !state.modalIsOpen,
        priceHistory: action.priceHistory
      }
    default:
      return state
  }
}