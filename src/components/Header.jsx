import { Container, Navbar } from "react-bootstrap"
import Navigation from "./Navigation"

const Header = () =>{
    return(
        <Navbar bg="black" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">TimeTable app</Navbar.Brand>
                <Navigation/>
            </Container>
        </Navbar>
    )
}
export default Header