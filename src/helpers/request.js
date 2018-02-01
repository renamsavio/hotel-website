import { saveJsonData } from '../actions'

function makeRequestURL(url) {
  return fetch(url)
}

export const makeRequest = (url) => {
  return function (dispatch) {
    return makeRequestURL(url)
      .then(
      response => {
        return response.json();
      })
      .then((res) => {
        dispatch(saveJsonData(res))
      })
  };
}