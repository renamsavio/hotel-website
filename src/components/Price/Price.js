import React from 'react'
import { Row , Col } from 'react-flexbox-grid';

const Price = (props) => (
  <div style={{height: '100%',  margin: '50px'}}>
    <span style={{width: '100%', display: 'inline-grid'}}>Total</span>
    <span style={{color: 'green', fontWeight: 'bold', fontSize: '32px', fontFamily: 'Heebo, sans-serif'}}>${props.price}</span>
  </div>
)

export default Price