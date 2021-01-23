import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Home from './pages/Home';
import Introducao from './pages/Introducao';
import Requisitos from './pages/Requisitos';
import HelloWorld from './pages/HelloWorld';
import Formulario from './pages/Formulario';

function App() {
  return (
    <div>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="introducao" title="Introdução">
          <Introducao />
        </Tab>
        <Tab eventKey="editores" title="Requisito">
          <Requisitos />
        </Tab>
        <Tab eventKey="helloworld" title="Hello World">
          <HelloWorld />
        </Tab>
        <Tab eventKey="formulario" title="Formulario">
          <Formulario />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
