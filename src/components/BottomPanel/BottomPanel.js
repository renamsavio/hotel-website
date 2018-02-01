import React from 'react'
import Filter from '../Filter/Filter'
import HotelItem from '../HotelItem/HotelItem'
import { saveJsonData } from '../../actions/'
import { connect } from 'react-redux'
import PriceHistoryModal from '../Modal/PriceHistoryModal'
import PriceHistoryBarChart from '../PriceHistoryBarChart/PriceHistoryBarChart'
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment'

import './BottomPanel.scss'

class BottomPanel extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <div>
          <PriceHistoryModal>
            <PriceHistoryBarChart />
          </PriceHistoryModal>
          <Grid fluid>
            <Row center="xs" style={{ marginBottom: "30px" }}>Best choices between <b>{moment(this.props.dates.checkin).format("MMMM Do YYYY")}</b> and <b>{moment(this.props.dates.checkout).format("MMMM Do YYYY")}</b></Row>
            <Row center="xs">
              <Col xs={8} md={2}><Filter /></Col>
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
    } else { return null }
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data.hotels,
    dates: state.dates.dates
  }
};

export default connect(mapStateToProps)(BottomPanel)