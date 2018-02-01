import { connect } from 'react-redux'
import { fetchHotelData } from '../actions'
import { makeRequest } from '../helpers/request'
import SearchButton from '../components/SearchButton/SearchButton'

const mapStateToProps = (state, ownProps) => {
  return {
    //active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  
  return {
    onClick: () => {
      dispatch(makeRequest(ownProps.url))
      //dispatch(fetchHotelData(ownProps.url))
    }
  }
}

const SearchButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchButton)

export default SearchButtonContainer