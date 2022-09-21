import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function MyNavBar() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand={"sm"}
        className="mb-3 my-nav-bar bg-transparent"
      >
        <Container fluid>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            placement="end"
            id={`offcanvasNavbarDropdown-expand-sm`}
            className="my-offcanvas"
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">My Skills</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/">Download Cv</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
