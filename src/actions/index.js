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