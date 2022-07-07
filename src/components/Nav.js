import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid style={{margin:'10px', padding:'5px 0'}}>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Rentals</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="success">Login/Singup</Button>         
        </Container>
         
      </Navbar>
      <br />
      
    </>
  );
}

export default NavBar;