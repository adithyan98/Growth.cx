import React from 'react'
import "./contents.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Contents() {
    return (
        <div className='content'>
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col xs={12} md={8} className='maintext'>Somebody told us sharing customer testimonials adds credibility.</Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={12} md={8} className='subtext'>So sharing some of them for the sake of it!</Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contents
{/* <p className='maintext'>Somebody told us sharing customer testimonials adds credibility.</p> */ }
