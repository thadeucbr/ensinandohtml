import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HelloWorld extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Vamos digitar sua primeira linha de código!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Geralmente todo tutorial que vimos nos mandariam digitar um Hello
              World, mas quero tentar algo diferente com você.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Vamos criar um botão!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              Para fazer isso primeiro precisamos construir a estrutura inicial
              do nosso html para que o navegador saiba o que fazer
            </h3>
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
                5           <title>Hello World</title>
                6       </head>
                7       <body>
                8       </body>
                9   </html>
                `}</code>
            </pre>
          </Col>
          <Col>
            <p>
              1 Declaramos o tipo do documento para que o navegador saiba que se
              trata de um html
            </p>
            <p>
              2 Informamos ao navegador que é uma página em Portugues do Brasil
              e começamos nosso arquivo html
            </p>
            <p>
              3 No head é onde definimos o titulo, o tipo de caracteres que
              usamos, os estilos, scripts e outras coisas
            </p>
            <p>
              4 Na tag {'<meta charset="UTF-8">'} estamos dizendo o tipo de
              encodamento de caracteres que estamos utilizando
            </p>
            <p>
              5 Na tag {'<title>'} você digita o que aparece na aba da sua
              pagina
            </p>
            <p>6 Fechamos a tag do head</p>
            <p>
              7 Abrimos o body, todas as tags e informações que iremos inserir
              no nosso site vai dentro da tag {'<body>'}
            </p>
            <p>
              8 Depois de colocar todo nosso conteudo dentro do body, temos que
              fechar a tag informando que é ali que termina nosso body
            </p>
            <p>
              9 E por fim fechamos a tag {'</html>'} para finalizar que nosso
              documento termina ali!
            </p>
            <p>
              <em>
                Importante saber que essa estrutura é a padrão em HTML, sempre
                que você for fazer um documento HTML você vai usa-la, ela não
                muda, é a base do seu HTML
              </em>
            </p>
            <p>
              <em>
                Caso você var fazer um ctrl+c ctrl+v não esqueça de tirar os
                numeros!
              </em>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              Agora que você já tem o corpo do HTML, o que me diz de popula-lo
              com um botão?
            </h3>
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
                5           <title>Hello World</title>
                6       </head>
                7       <body>
                8           <button onclick=alert('Hello World!')>Click</button>
                9       </body>
                10   </html>
                `}</code>
            </pre>
          </Col>
          <Col>
            <p>Na linha 8 criamos o seu primeiro botão!</p>
            <p>Vamos falar um pouco sobre o que está acontecendo...</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 4 }}>
            <h3>Dissecando o botão!</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <pre>
              <code>{`
                1 <button
                2   onclick=alert('Hello World!)>
                3  Click
                4 </button>
            `}</code>
            </pre>
          </Col>
          <Col>
            <p>Separei em linhas a sua tag button para te explicar melhor</p>
            <p>1 Declaramos o nome da nossa tag</p>
            <p>
              2 A tag button possui alguns atributos que podemos incluir dentro
              dela, dentre eles a função onclick, que faz com que o botão ao ser
              clicado realize uma ação.
            </p>
            <p>
              No exemplo utilizamos o alert(), que cria um alerta na tela com o
              texto que você passar.
            </p>
            <p>
              Vá em frente, mude o Hello World para alguma outra coisa, só
              mantenha as aspas, pois elas indentificam que é um texto que está
              indo ali dentro!
            </p>
            <p>Na linha 3 é onde vai o titulo que fica dentro do nosso botão</p>
            <p>E por fim na linha 4 fechamos nossa tag!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Vamos praticar?</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Para você que teve paciencia de ler tudo e chegou até aqui, eu
              deixo uma pequena tarefa!
            </p>
            <p>
              Faça mais alguns botões na tela, brinque, descubra, escrever
              códigos pode parecer dificil, mas depois de um pouco de empenho e
              sofrimento, você vai acabar vendo como é prazeroso quando sua
              aplicação funciona ou quando você adquire as habilidades
              necessarias para criar o que vier em sua mente!
            </p>
            <p>
              <a
                href="https://www.w3schools.com/tags/tag_button.asp"
                rel="noreferrer"
                target="_blank">
                Clique aqui para saber mais sobre botões
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HelloWorld;
