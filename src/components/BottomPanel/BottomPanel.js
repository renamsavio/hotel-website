import React from 'react'
import Filter from '../Filter/Filter'
import HotelItem from '../HotelItem/HotelItem'
import { saveJsonData } from '../../actions/'
import { connect } from 'react-redux'

import { Grid, Row, Col } from 'react-flexbox-grid';

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
      <Grid fluid>
        <Row center="xs" style={{"margin-bottom": "30px"}}>Best choices between dateStart and dateEnd</Row>
        <Row>
          <Col xs={5} md={2}><Filter /></Col>
          <Col xs>
            {this.props.data.map((hotel) =>
              <HotelItem
                key={hotel.id}
                description={hotel.description}
                name={hotel.name}
                rate={hotel.rate}
                image={hotel.image}
                price={hotel.price} />
            )}
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data.hotels
  }
};

export default connect(mapStateToProps)(BottomPanel)