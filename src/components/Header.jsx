import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "./header.css"

function Header() {
    return (
        <>
            <Navbar className='nav' collapseOnSelect expand="lg" variant="light">
                <Container fluid>
                    <Navbar.Brand className='brand' href="#home">
                        <img className='logo' src="https://i.postimg.cc/4NgwXSZ4/logo.png" alt="" />
                        <p className='title'>growth.cx</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features"><span className='navitem'>Why us?</span></Nav.Link>
                            <Nav.Link href="#pricing"><span className='navitem pains'><img className='pains' src="https://i.postimg.cc/7YkH9TJ6/panis.png" alt="" /> Our fixes</span></Nav.Link>
                            <Nav.Link href="#pricing"><span className='navitem'>Growth</span></Nav.Link>
                            <Nav.Link href="#pricing"><span className='navitem'>Eye-openers</span></Nav.Link>
                            <Nav.Link href="#pricing"><span className='navitem'>Customers</span></Nav.Link>
                            <Button variant="dark">Hope on a Call</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header