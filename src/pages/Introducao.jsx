import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CodeSandBox from '../components/CodeSandBox';

class Introducao extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={{ offset: 2 }}>
              <h1>Como é uma página por trás dos panos?</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <CodeSandBox url={'mystifying-lalande-9d3g8'} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Introducao;
