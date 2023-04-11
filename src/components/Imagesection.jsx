import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Airable from '../assets/airtable1.png'
import sketch from '../assets/sketch2.png'
import dribble from '../assets/dribble3.png'
import slack from '../assets/slack4.png'
import live from '../assets/live5.png'
import git from '../assets/gitlab6.png'
export const Imagesection = () => {
    return (
        <div className=' bg_light_green py-5'>
            <Container className=''>
                <Row className=' align-items-center justify-content-center'>
                    <Col lg={2} md={3} sm={4} xs={6} className=' pt-sm-0 pt-4 d-flex justify-content-center'><img src={Airable} className='w-75' /></Col>
                    <Col lg={2} md={3} sm={4} xs={6} className=' pt-sm-0 pt-4 d-flex justify-content-center'><img src={sketch} className='w-75' /></Col>
                    <Col lg={2} md={3} sm={4} xs={6} className=' pt-sm-0 pt-4 d-flex justify-content-center'><img src={dribble} className='w-75' /></Col>
                    <Col lg={2} md={3} sm={4} xs={6} className='pt-md-0 pt-4 d-flex justify-content-center'><img src={slack} className='w-75' /></Col>
                    <Col lg={2} md={3} sm={4} xs={6} className=' pt-lg-0 pt-4 d-flex justify-content-center'><img src={live} className='w-75' /></Col>
                    <Col lg={2} md={3} sm={4} xs={6} className=' pt-lg-0 pt-4 d-flex justify-content-center'><img src={git} className='w-75' /></Col>
                </Row>
            </Container>
        </div>

    )
}
