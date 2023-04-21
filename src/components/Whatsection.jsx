import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import adam from '../assets/adam.png'
import adam2 from '../assets/adam2.png'
import adam3 from '../assets/adam3.png'
import star from '../assets/star.png'
import arrow from '../assets/arrowright.png'
import vactor from '../assets/Vector.png'
export const Whatsection = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col lg={4}>
                    <div className=' d-flex adam align-items-center show_box pointer p-4'>
                        <span className=' d-flex align-items-center'><img className='w-75' src={adam} alt="" /></span>
                        <p className='mb-0 ps-4 ff_Anybody fw_700 fs_22 clr_light_black'>Adam Smith</p>
                        <span className=' d-flex align-items-center ms-3'><img className='w-50' src={arrow} alt="" /></span>
                    </div>
                    <div className=' d-flex adam align-items-center mt-4 show_box pointer p-4'>
                        <span className=' d-flex align-items-center'><img className='w-75' src={adam2} alt="" /></span>
                        <p className='mb-0 ps-4 ff_Anybody fw_700 fs_22 clr_light_black'>Adam Smith</p>
                        <span className=' d-flex align-items-center ms-3'><img className='w-50' src={arrow} alt="" /></span>
                    </div>
                    <div className=' d-flex adam align-items-center mt-4 show_box pointer p-4'>
                        <span className=' d-flex align-items-center'><img className='w-75' src={adam3} alt="" /></span>
                        <p className='mb-0 ps-4 ff_Anybody fw_700 fs_22 clr_light_black'>Adam Smith</p>
                        <span className=' d-flex align-items-center ms-3'><img className='w-50' src={arrow} alt="" /></span>
                    </div>
                </Col>
                <Col lg={8} className=' bg_light_green d-flex flex-column align-items-center'>
                    <div className='opacity- show pt-2 pb-3'>
                        <div className='p-4  d-flex flex-column align-items-center '>
                            <span><img src={vactor} alt="" /></span>
                            <p className='mt-4 clr_grey text-center fw_400 ff_Red-Hat-Display fs_22'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <p className=' text-center ff_Anybody fw_700 fs_22 clr_dark_green'>Web Developer</p>
                            <img src={star} alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Whatsection