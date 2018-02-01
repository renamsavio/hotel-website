import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types'

import './SearchButton.css'

const style = {
  margin: 12
};

const SearchButton = ({ onClick }) => (
  <div className="SearchButton-main">
    <RaisedButton label="Search hotels" primary={true} style={style}
      onClick={
        (e) => {
          e.preventDefault()
          onClick()
        }
      } />
  </div>
)

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SearchButton