import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Formulario extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ offset: 3 }}>
            <h1>Vamos fazer um formulario!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Hoje vou te ensinar a usar algumas tags para criar um formulario!
            </p>
            <p>Sem mais delongas, vamos por a mão na massa!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <pre>
              <code>{`
                1   <!DOCTYPE html>
                2   <html lang="pt-br">
                3       <head>
                4           <meta charset="UTF-8">
                5           <title>Super Formulario</title>
                6       </head>
                7       <body>
                8       </body>
                9   </html>
                `}</code>
            </pre>
          </Col>
          <Col>
            <p>
              Lembra que eu te disse no Hello World, que tinhamos uma estrutura
              básica para criar arquivos HTML?
            </p>
            <p>
              Pois bem! Estou te passando ela novamente, só não esquece de tirar
              os numeros caso var fazer um ctrl+c ctrl+v!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Tags que usaremos:</h3>
          </Col>
          <Col>
            <h3>O que elas fazem?</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ol>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.w3schools.com/tags/tag_form.asp">{`<form></form>`}</a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.w3schools.com/tags/tag_fieldset.asp">
                  {'<fieldset></fieldset>'}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.w3schools.com/tags/tag_label.asp">
                  {'<label></label>'}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.w3schools.com/tags/tag_input.asp">
                  {'<input>'}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.w3schools.com/tags/tag_select.asp">
                  {'<select></select>'}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.w3schools.com/tags/tag_optgroup.asp">
                  {'<optgroup></optgroup>'}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.w3schools.com/tags/tag_option.asp">
                  {'<option></option>'}
                </a>
              </li>
            </ol>
          </Col>
          <Col>
            <ol>
              <li>
                Encapsula todo nosso formulario, todas as tags a seguir ficam
                dentro dessa tag!
              </li>
              <li>
                Cria um estilo para indentificarmos a seção do nosso formulario
              </li>
              <li>Coloca uma indentificação no nosso campo</li>
              <li>Cria um campo para que o usuario possa preencher</li>
              <li>Cria uma lista de itens dentro de um dropdown</li>
              <li>Cria um grupo dentro da lista de itens</li>
              <li>Cria as opções dentro do dropdown</li>
            </ol>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 2 }}>
            <h2>Segue um exemplo de como juntar tudo isso</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Código</h4>
          </Col>
          <Col>
            <h4>Resultado</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <pre>
              <code>{`
              <!DOCTYPE html>
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8" />
                        <title>Meu Primeiro Formulario</title>
                    </head>
                    <body>
                        <form>
                            <fieldset>
                                <legend>Dados para o evento</legend>
                                <label for="nome">Nome</label>
                                <input type="text" id="nome">
                                <label for="evento">Evento</label>
                                <select id="evento">
                                <optgroup label="Palco">
                                    <option>Super Tech</option>
                                    <option>Mega Tech</option>
                                    <option>Ultra Tech</option>
                                </optgroup>
                                <optgroup label="Tecnologia">
                                    <option>HTML</option>
                                    <option>Javascript</option>
                                    <option>SQL</option>
                                </optgroup>
                                </select>
                            </fieldset>
                        </form>
                    </body>
                </html>
                `}</code>
            </pre>
          </Col>
          <Col>
            <form>
              <fieldset>
                <legend>Dados para o evento</legend>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" />
                <label htmlFor="evento">Evento</label>
                <select id="evento">
                  <optgroup label="Palco">
                    <option>Super Tech</option>
                    <option>Mega Tech</option>
                    <option>Ultra Tech</option>
                  </optgroup>
                  <optgroup label="Tecnologia">
                    <option>HTML</option>
                    <option>Javascript</option>
                    <option>SQL</option>
                  </optgroup>
                </select>
              </fieldset>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 4 }}>
            <h1>Hora da pratica!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Veja o código que eu te passei e monte esse formulario que
              está ao lado.
            </p>
            <p>
              Se ficar em duvida de como usar qualquer uma das tags, volte lá em
              cima e clique nelas, você será redirecionado para um site que
              explica exatamente como usa-las, e todo o seu poder!
            </p>
          </Col>
          <Col>
              <form>
                  <fieldset>
                      <label htmlFor="nombre">Nome</label>
                      <input type="text" id="nombre" placeholder="Seu Nome Completo" />
                      <label htmlFor="email">Email</label>
                        <input id="email" type="email" />
                        <label htmlFor="telefone">Telefone</label>
                        <input type="phone" id="telefone" placeholder="(00)91234-5678"/>
                      <label htmlFor="genero">Genero</label>
                      <select id="genero">
                        <option>Selecione</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Outro</option>
                      </select>
                  </fieldset>
              </form>
          </Col>
        </Row>
        <Row>
            <Col>
                <h4>E para finalizar...</h4>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>Na página anterior você criou um botão, agora já está fazendo formularios!</p>
                <p>Continue treinando, brinque com o formulario, invente varios modelos, descubra o poder das tags!</p>
                <p>Guarde esse seu formulario, pois iremos estiliza-lo um pouco em breve!</p>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Formulario;
