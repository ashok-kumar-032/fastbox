import React from 'react'
import ven from '../assets/ven.png'

import { Container, Row, Col } from 'react-bootstrap';
const WeHave = () => {
    return (
        <Container className='py-5 mt-5'>
            <Row>
                <Col xl={5} xs={12} className='van_hover  overflow-hidden position-relative'>
                    <img className='w-100 p-3 van_img effect' src={ven} alt="" />
                    <img className='w-100 p-3 image_2 effect position-absolute' src={ven} alt="" />

                </Col>
                <Col xl={7} xs={12} className='d-flex flex-column align-items-center align-items-xl-start text-center text-xl-start'>
                    <p className='fw_700 fs_45 ff_Anybody clr_dark_green'>We Have the largest Network</p>
                    <p className='fw_400 fs_18 ff_Red_Hat_Text clr_grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a className='fw_400 fs_20 ff_Poppinse clr_white Learn_btn d-inline-block mt-4' href="#">Learn More</a>
                </Col>
            </Row>
        </Container>
    )
}

export default WeHave