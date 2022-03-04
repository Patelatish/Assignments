import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Cart, Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';



function Header(){
  const [user,setUser] = useState({});
  const signout = async (e) => {
    await signOut(auth);
  };
  onAuthStateChanged(auth,(currentUser) => {
    setUser(currentUser)
  });
  return(
      <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to={"/product"}>Products</Nav.Link> */}
              {/* <NavDropdown title="Category" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Cloths</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
            {/* {user ? 
                (<Nav.Link as={Link} to={"/cart"}><Cart/></Nav.Link>) 
                : 
                (<Nav.Link as={Link} to={"/signin"}><Cart/></Nav.Link>)
              } */}
              {/* <Nav.Link as={Link} to={"/cart"}><Cart/></Nav.Link> */}
              <Nav.Link as={Link} to={"/cart"}><Cart/></Nav.Link>
                
              {user ? 
                (<>
                <Nav.Link as={Link} to={"/dashboard"}><Person/></Nav.Link>
                <Nav.Link onClick={signout}>Signout</Nav.Link>
                </>
                ) 
                : 
                (<>
                {/* <Nav.Link as={Link} to={"/signin"}><Cart/></Nav.Link> */}
                <Nav.Link as={Link} to={"/signin"}><Person/></Nav.Link>
                </>)
              }
              
              {/* <Nav.Link as={Link} to={"/signin"}><Person/></Nav.Link> */}
              {/* <Nav.Link as={Link} to={"/signup"}>Signup</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  );
}
export default Header;
