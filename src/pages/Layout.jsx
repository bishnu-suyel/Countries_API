import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import { auth, logout } from "../auth/firebase";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Layout = () => {
  const [user] = useAuthState(auth);

  return (
    <Container fluid>
      <Row>
        <Navbar
          style={{ marginBottom: "1rem", backgroundColor: "#d0e5ff" }}
          // bg="light"
          // variant="light"
        >
          <Container className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link className="fw-bold">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link className="fw-bold">Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favourites">
                  <Nav.Link className="fw-bold">Favourites</Nav.Link>
                </LinkContainer>
                {/* Conditionally render Register and Login links */}
                {!user ? (
                  <>
                    <LinkContainer to="/register">
                      <Nav.Link className="fw-bold">Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <Nav.Link className="fw-bold">Login</Nav.Link>
                    </LinkContainer>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={logout}
                      className="fw-bold"
                      style={{
                        color: "black",
                        backgroundColor: "#d0e5ff",
                        border: "none",
                      }}
                    >
                      Logout
                    </Button>
                    <div
                      style={{
                        marginLeft: "50rem",
                        marginTop: "0.5rem",
                      }}
                      className="text-success"
                    >
                      Welcome, {user.email.split("@")[0]}
                    </div>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row style={{ flex: "1", minHeight: "calc(100vh - 60px)" }}>
        {" "}
        <Outlet />
      </Row>
      {/* Footer Section */}
      <footer
        className="p-3 text-center"
        style={{
          backgroundColor: "#d0e5ff",
          borderTop: "1px solid #e9ecef",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0, flexGrow: 1 }}>
          &copy; {new Date().getFullYear()} Countries App. All rights reserved.
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://github.com/bishnu-suyel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "1rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/bishnu-suyel"
            link
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "1rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Layout;
