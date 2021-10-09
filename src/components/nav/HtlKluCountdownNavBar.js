import {Container, Nav, Navbar} from "react-bootstrap";

function HtlKluCountdownNavBar() {
    return <Navbar bg="dark" variant={"dark"} expand="xl">
        <Container>
            <Navbar.Brand>HTL-KLU Countdown</Navbar.Brand>
            <Nav>
                <Nav.Link>Sign In</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default HtlKluCountdownNavBar