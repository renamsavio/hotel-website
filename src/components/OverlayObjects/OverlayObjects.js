import React from 'react'
import InlineSVG from 'svg-inline-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OverLayObjects = () => {
  return (
    <Grid fluid style={{height: "100%"}}>
      <Row middle="xs" center="xs" style={{height: "100%"}}>
        <Col style={{width: "50%", textAlign: "center"}}>
          <Row center="xs" style={{paddingBottom: "10px"}}><InlineSVG src={require("../../images/crown.svg")} /></Row>
          <Row center="xs" style={{color: "white", fontSize: "20px"}}>WELCOME TO</Row>
          <Row><hr color="white" width="100%" /></Row>
          <Row center="xs" style={{color: "white", fontSize: "48px"}}><b>CHARLOTTE</b></Row>
          <Row><hr color="white" width="100%" /></Row>
          <Row center="xs" style={{color: "white", fontSize: "20px"}}><b>THE QUEEN CITY</b></Row>
        </Col>
      </Row>
    </Grid>
  )
}

export default OverLayObjects