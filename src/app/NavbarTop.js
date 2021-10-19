import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarTop = () => {

  /* const menu = menuList.map(item => (
    <NavLink key={item.name} to={item.path}>{item.name}</NavLink>

  )) */
  return (
<>
<Navbar bg="dark" variant="dark">
    <Container className="font">
    <Navbar.Brand style={{ fontWeight: "bold" }} href="/">D R O P P Y N</Navbar.Brand>
    <Nav className="d-flex justify-content-end">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/buy">Buy</Nav.Link>
      <Nav.Link href="">Sell</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}


export default NavbarTop;
