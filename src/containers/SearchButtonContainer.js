import { connect } from 'react-redux'
import { fetchHotelData } from '../actions'
import { makeRequest } from '../helpers/request'
import SearchButton from '../components/SearchButton/SearchButton'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(makeRequest(ownProps.url))
    }
  }
}

const SearchButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchButton)

export default SearchButtonContainer