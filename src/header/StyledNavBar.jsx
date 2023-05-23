import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function StyledNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/MainPage">Home</Navbar.Brand>
          <Nav
            className="me-auto"
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Nav.Link href="/MainPage">Home</Nav.Link>
            <Nav.Link href="/">LogIn</Nav.Link>
            <Nav.Link href="/SignUp">SignUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default StyledNavBar;
