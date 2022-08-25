import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Container>
        <Nav activeKey="/Home">
          <Nav.Item>
            <NavLink className="nav-link" to="/Home">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/Posts">Posts</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/Todos">Todos</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/Users">Users</NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
}