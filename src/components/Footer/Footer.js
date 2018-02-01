import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import InlineSVG from 'svg-inline-react';

import facebook from '../../images/facebook.svg'

const Footer = () => (
  <Grid>
    <Row center="xs">
      <Col style={{paddingRight: "10px"}}><InlineSVG src={require("../../images/facebook.svg")} /></Col>
      <Col style={{paddingRight: "10px"}}><InlineSVG src={require("../../images/twitter.svg")} /></Col>
      <Col style={{paddingRight: "10px"}}><InlineSVG src={require("../../images/instagram.svg")} /></Col>
    </Row>
    <Row>
      <Col center="xs"></Col>
    </Row>
  </Grid>
);

export default Footer