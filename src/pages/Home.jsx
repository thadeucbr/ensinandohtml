import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
  render() {
      const conteudo = [
          'Introdução',
          'Requisito',
          'Hello World',
          'Formulario',
      ]
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Seja muito bem vindo a introdução a HTML5</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Meu nome é Thadeu Castelo Branco Ramos, sou estudante de
                Desenvolvimento Web.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Irei te guiar em seus primeiros passos em HTML5, aqui abordarei,
                com uma visão de estudante, alguns tópicos iniciais de HTML5,
                sempre colocando a mão na massa para seu melhor aprendizado.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Uma lição valiosa que aprendi, foi que não adianta nos apegarmos
                aos conteudos teoricos que vemos, o real aprendizado vem sempre
                de muita prática.
              </p>
            </Col>
          </Row>
          <Row>
              <Col>
                  <p>Sugiro que você siga a seguinte ordem de conteudo:</p>
              </Col>
              <Col>
                <ol>
                    {conteudo.map((item) => <li>{item}</li>)}
                </ol>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
