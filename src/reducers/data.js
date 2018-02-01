const INITIAL_STATE = {
  data: {}
}

export const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_HOTEL_DATA':
      return { url: action.url }
    case 'SAVE_JSON_DATA':
      return { data: action.newValue }
    case 'FILTER_HOTEL_DATA':
      return { filter: action.filter }
    default:
      return state
  }
}