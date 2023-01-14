import React from 'react';
import { Container, Row, Col } from 'reactstrap';


function App() {
  return (
    <Container fluid>
      <Row style={{height: "100vh"}}>
        <Col id="left" sm={12} md={6} className ="order-sm-1 order-md-2">
        </Col>
        <Col id="right" sm={12} md={6} className ="order-sm-1 order-md-2" style={{height: "100%"}}>
        </Col>
      </Row>
      <div id="primary">
        <h1 className="sans">Coming Soon!</h1>
        <h1>Tribes of Men</h1>
        <h2 className="sans">An Aesthic Finder for men and male-presenting people.</h2>
      </div>
    </Container>
  );
}

export default App;
