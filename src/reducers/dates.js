const INITIAL_STATE =  {
  dates: {} 
}

export const dates = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_DATES':
      return { dates: action.newValue }
    default:
      return state
  }
}