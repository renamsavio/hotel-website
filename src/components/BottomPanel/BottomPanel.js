import React from 'react'
import Filter from '../Filter/Filter'
import HotelItem from '../HotelItem/HotelItem'
import { saveJsonData } from '../../actions/'
import { connect } from 'react-redux'

import './BottomPanel.scss'

class BottomPanel extends React.Component {
  
  componentWillMount() {
    console.log(this.props)
    let dispatch = this.props.dispatch
    fetch('https://www.raphaelfabeni.com.br/rv/hotels.json')
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        dispatch(saveJsonData(res))
        console.log('...dispatched')
      }
    )
  }

  render() {
    return (
      <div className="BottomPanel-Main" >
        <div className="BottomPanel-title">Best choices between and </div>
        <div className="BottomPanel-content">
          <div className="BottomPanel-content-Filter">
            <Filter />
          </div>
          <div className="BottomPanel-content-Items">
            {this.props.data.map((hotel) =>
            <HotelItem 
              key={hotel.id} 
              description={hotel.description}
              name={hotel.name} 
              rate={hotel.rate} 
              image={hotel.image}
              price={hotel.price}/>
          )}
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data.hotels
  }
};

export default connect(mapStateToProps)(BottomPanel)