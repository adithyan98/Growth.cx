import React from 'react'
import './footer.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
    return (
        <>
            <img className='footerimg' src="https://i.postimg.cc/fknRxc7p/footer-desk-jpg.png" alt="" />
            <div className='footer'>
                <p className='footertag'>Set foundation for an aggressive growth</p>
                <Button className='footbtn' variant="light">Hope on a Call</Button>
                <Container>
                    <Row className='footitem'>
                        <Col className='footcol'>
                            <p className='foothead'>Our fixes</p>
                            <p className='footlist'>Team</p>
                            <p className='footlist'>Expert</p>
                            <p className='footlist'>Content</p>
                        </Col>
                        <Col className='footcol'>
                            <p className='foothead'>Community</p>
                            <p className='footlist'>About us</p>
                            <p className='footlist'>Contact us</p>
                            <p className='footlist'>Privacy</p>
                            <p className='footlist'>Terms</p>
                        </Col>
                        <Col className='footcol'>
                            <p className='foothead'>Resource</p>
                            <p className='footlist'>Eye openers</p>
                            <p className='footlist'>Buzz</p>
                        </Col>
                        <Col className='footcol'>
                            <p className='foothead'>Social</p>
                            <p className='footlist'>Linkedin</p>
                            <p className='footlist'>Twitter</p>
                            <p className='footlist'>Facebook</p>
                            <p className='footlist'>Instagram</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p className='copy'>&copy; Copyright 2020 Growth.cx</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer