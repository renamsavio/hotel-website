import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';

class PriceHistoryBarChart extends React.Component {
  render() {
    return (
      <BarChart width={600} height={300} data={this.props.priceHistory}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="month" />
        <YAxis dataKey="value" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="orange" />
      </BarChart>
    )
  }
}

const mapStateToProps = state => {
  return {
    priceHistory: state.modal.priceHistory
  }
}

export default connect(mapStateToProps)(PriceHistoryBarChart)