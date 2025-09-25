import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import Widget from "../../components/panels/Widget";

const Header = () => {
    return (
        <Widget className="pb-0 pt-0">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" className="text-decoration-none text-white">AutoPublish</Navbar.Brand>
                </Container>

                <Navbar.Collapse id="header" className="justify-content-end">
                    <Navbar.Text className="text-white me-2" style={{ minWidth: 160 }}>
                        <div>Přihlášený uživatel:</div>
                        <div>
                            <Link to="/my-account" className="text-white">František Feichtinger</Link>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Widget>
    );
}

export default Header;