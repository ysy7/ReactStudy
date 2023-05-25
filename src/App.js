import {Button,Navbar,Container,Nav} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import bg



from './img/bg1.png';
import shoes01 from './img/shoes01.png'
import shoes02 from './img/shoes02.png'
import shoes03 from './img/shoes03.png'

function App() {
  return (
    <div className="App">
        {/* <Button variant="success">Success</Button> */}
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={shoes01}/>
            <h4>상품명</h4>
            <p>상품설명</p>  
          </div>
          <div className='col-md-4'>
            <img src={shoes02}/>
            <h4>상품명</h4>
            <p>상품설명</p> 
          </div>
          <div className='col-md-4'>
            <img src={shoes03}/>
            <h4>상품명</h4>
            <p>상품설명</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;