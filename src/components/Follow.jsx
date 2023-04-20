import React from 'react'
import map from '../assets/map.png'
import follow_fill from '../assets/follow_fill.png'
import Howfest_back from '../assets/Howfest_back.png'
import { Container, Row, Col } from 'react-bootstrap';

const Follow = () => {
    return (
        <section className='py-5 position-relative'>
            <span><img className=' position-absolute star_follow d-none d-xl-block' src={Howfest_back} alt="" /></span>

            <Container>
                <Row>
                    <Col xl={6} xs={12} className='d-flex flex-column align-items-center align-items-xl-start text-center text-xl-start'>
                        <p className='fw_700 fs_45 ff_Anybody clr_dark_green'>Follow your shipment via GPS</p>
                        <p className='fw_400 fs_22 ff_Red_Hat_Display clr_grey max_w_618 mt-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate..</p>
                        <a className='fw_400 fs_20 ff_Poppinse clr_white Learn_btn d-inline-block mt-5' href="#">Learn More</a>

                    </Col>
                    <Col xl={6} xs={12} className=''>
                        <img className='W_100 position-absolute d-none d-xl-block' src={map} alt="" />
                        <img className=' w-100 d-xl-none d-block mt-5' src={follow_fill} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Follow