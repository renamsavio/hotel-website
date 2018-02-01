import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { toggleModal } from '../../actions/'
import { connect } from 'react-redux'

import './HotelItemButtons.scss'

const style = {
  booking: {
    margin: 10,
    border: '1px solid orange',
    buttonStyle: {
      padding: '0px'
    }
  },
  price_history: {
    margin: 10,
    border: '1px solid green'
  }
};

class HotelItemButtons extends React.Component {
  constructor(props) {
    super()
    this.priceHistory = props.priceHistory
    this.dispatch = props.dispatch
  }

  render() {
    return (<Row start="xs">
      <Col xs={12}>
        <RaisedButton label="Book Now" style={style.booking} backgroundColor="white" /*labelColor="orange"*/ />
        <RaisedButton label="Price History" style={style.price_history} backgroundColor="white" /*labelColor="green"*/ onClick={() => this.dispatch(toggleModal(this.priceHistory))} />
      </Col>
    </Row>);

  }
}

const mapStateToProps = state => {
  return {
    data: state.data.data.hotels
  }
};

export default connect(mapStateToProps)(HotelItemButtons)