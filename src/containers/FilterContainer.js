import { connect } from 'react-redux'
import { updateFilter } from '../actions'
import Filter from '../components/Filter/Filter'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (filter) => {
      dispatch(updateFilter(filter))
    }
  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer