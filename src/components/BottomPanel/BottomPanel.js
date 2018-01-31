import React from 'react'
import Filter from '../Filter/Filter'
import HotelItem from '../HotelItem/HotelItem'
import { saveJsonData } from '../../actions/'
import { connect } from 'react-redux'
import PriceHistoryModal from '../Modal/PriceHistoryModal'
import PriceHistoryBarChart from '../PriceHistoryBarChart/PriceHistoryBarChart'
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
      <div>
        <PriceHistoryModal>
          <PriceHistoryBarChart />
        </PriceHistoryModal>
        <Grid fluid>
          <Row center="xs" style={{ marginBottom: "30px" }}>Best choices between dateStart and dateEnd</Row>
          <Row>
            <Col xs={5} md={2}><Filter /></Col>
            <Col xs>
              {this.props.data.map((hotel, index) =>
                <HotelItem
                  key={index}
                  description={hotel.description}
                  name={hotel.name}
                  rate={hotel.rate}
                  image={hotel.image}
                  price={hotel.price}
                  price_history={hotel.price_history} />
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data.hotels
    //chartData: state.modal.data
  }
};

export default connect(mapStateToProps)(BottomPanel)