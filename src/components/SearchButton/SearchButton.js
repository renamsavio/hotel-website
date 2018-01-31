import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

import './SearchButton.css'

const style = {
  margin: 12
};

const SearchButton = () => (
  <div className="SearchButton-main">
    <RaisedButton label="Search hotels" primary={true} style={style} />
  </div>
)

export default SearchButton