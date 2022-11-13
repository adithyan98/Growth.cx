import React from 'react'
import './review.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Review() {
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={12} md={8} className='customer'>A few of our happy customers</Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} className='customer1'>
                        <div className='image'>
                            <span><img className='pic' src="https://i.postimg.cc/h49cBR1b/man1.png" alt="" /></span>
                        </div>
                        <div className="reviews">
                            <span className='company'>CrawIQ</span>
                            <span className='name'>Harish Kumar</span>
                            <span className='position'>CEO & Founder CrawIQ.ai</span>
                            <span className='review'>They are very dedicated team and one can easily realay on them to deliver successfull outcomes.</span>
                        </div>
                        <div className='services'>
                            <h6>Services Provided:</h6>
                            <span className='servicename'>GMT Consulting</span>
                            <span className='servicename'>Growth Marketing</span>
                            <span className='servicename'>Design</span>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col xs={12} md={8} className='customer2'>
                        <div className='image2'>
                            <span><img className='pic' src="https://i.postimg.cc/fTkD2ggs/2nd.jpg" alt="" /></span>
                        </div>
                        <div className="reviews">
                            <span className='company2'>SuperBeings</span>
                            <span className='name2'>Chayan Mukherjee</span>
                            <span className='position2'>CEO & Founder Quandle</span>
                            <span className='review2'>Team growth.cx did a great job in helping us revamp our website to make it stand on par with global SaaS brands which turned our Appsumo campaign into a huge success.</span>
                        </div>
                        <div className='services'>
                            <h6>Services Provided:</h6>
                            <span className='servicename'>GMT Consulting</span>
                            <span className='servicename'>Growth Marketing</span>
                            <span className='servicename'>Design</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} className='customer1'>
                        <div className='image'>
                            <span><img className='pic' src="https://i.postimg.cc/h49cBR1b/man1.png" alt="" /></span>
                        </div>
                        <div className="reviews">
                            <span className='company'>CrawIQ</span>
                            <span className='name'>Harish Kumar</span>
                            <span className='position'>CEO & Founder CrawIQ.ai</span>
                            <span className='review'>They are very dedicated team and one can easily realay on them to deliver successfull outcomes.</span>
                        </div>
                        <div className='services'>
                            <h6>Services Provided:</h6>
                            <span className='servicename'>GMT Consulting</span>
                            <span className='servicename'>Growth Marketing</span>
                            <span className='servicename'>Design</span>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col xs={12} md={8} className='customer2'>
                        <div className='image2'>
                            <span><img className='pic' src="https://i.postimg.cc/fTkD2ggs/2nd.jpg" alt="" /></span>
                        </div>
                        <div className="reviews">
                            <span className='company2'>appveen</span>
                            <span className='name2'>Chayan Mukherjee</span>
                            <span className='position2'>CEO & Founder Quandle</span>
                            <span className='review2'>As a growth marketing partner, the impact growth.cx creates is tremendous. Organic traffic was something we really wanted to multiply. They just came in and took it to another level in just 3 months.</span>
                        </div>
                        <div className='services'>
                            <h6>Services Provided:</h6>
                            <span className='servicename'>GMT Consulting</span>
                            <span className='servicename'>Growth Marketing</span>
                            <span className='servicename'>Design</span>
                        </div>
                    </Col>
                </Row>  
            </Container>
        </div>
    )
}

export default Review