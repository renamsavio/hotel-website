const INITIAL_STATE =  {
  modalIsOpen: false 
}

export const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { modalIsOpen: !state.modalIsOpen }
    default:
      return state
  }
}