export const updateDates = dates => {
  return {
    type: 'UPDATE_DATES',
    newValue: dates
  }
}

export const saveJsonData = data => {
  return {
    type: 'SAVE_JSON_DATA',
    newValue: data
  }
}

export const toggleModal = priceHistory => {
  return {
    type: 'TOGGLE_MODAL',
    priceHistory: priceHistory
  }
}

export const fetchHotelData = url => {
  return {
    type: 'FETCH_HOTEL_DATA',
    url: url
  }
}

export const updateFilter = (filter) => {
  return {
    type: 'FILTER_HOTEL_DATA',
    filter: filter
  }
}