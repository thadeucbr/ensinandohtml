import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Requisitos extends Component {
  render() {
    const editores = [
      {
        editor: 'Visual studio code',
        site: 'https://code.visualstudio.com/download',
      },
      {
        editor: 'Sublime text',
        site: 'https://www.sublimetext.com/3',
      },
      {
        editor: 'Atom Editor',
        site: 'https://atom.io/',
      },
      {
        editor: 'Notepad++',
        site: 'https://notepad-plus-plus.org/downloads/',
      },
      {
        editor: 'Brackets',
        site: 'http://brackets.io/',
      },
    ];
    return (
      <Container>
        <Row>
          <h1>Requisito básico para programar</h1>
        </Row>
        <Row>
          <Col>
            <h5>
              Você vai precisar de um editor de texto, é lá que toda a mágica
              vai aconter.
            </h5>
            <p>
              Segue uma lista de editores para você dar uma olhada, pode
              escolher qualquer um para começar a aprender (É só clicar e baixar)
            </p>
            <ul>
              {editores.map((item) => (
                <li><a href={item.site}>{item.editor}</a></li>
              ))}
            </ul>
            <p>Tenha em mente que não existe um editor melhor que o outro, todos são boas opções, atualmente estou usando o Visual Studio Code</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Requisitos;
