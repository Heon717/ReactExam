import React , {useState} from 'react';
import {Navbar,Container, Nav, Button }from 'react-bootstrap';
import './App.css';
import Content from './Content.js';
import data from './data.js';

function App() {

  let [shoes,setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>

    <div className="dsc">
      <h1>20% Season Off</h1>
      <p> 할인합니다</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </div>
    
    <div className="container">
      <Content shoes={shoes}/>
    </div>

    </div>
  );
}

export default App;
 