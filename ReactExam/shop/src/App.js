import React , {useState} from 'react';
import {Navbar,Container, Nav, Button }from 'react-bootstrap';
import './App.css';
import Content from './Content.js';
import data from './data.js';

import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

function App() {

  let [shoes,setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
        <Nav.Link>Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>

    <Switch>

    <Route exact path="/">
      <div className="dsc">
        <h1>20% Season Off</h1>
        <p> 할인합니다</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>

      <div className="container">
        {
          shoes.map((e,i)=>{
            return <Content shoes={shoes[i]} key={i}/>
          })
        }

      </div>
    </Route>

    <Route path="/detail/:id">
        <Detail shoes={shoes}/>
    </Route>

    </Switch>
    </div>
  );
}

export default App;
 