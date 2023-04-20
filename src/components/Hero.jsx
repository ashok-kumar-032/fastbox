import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cycle from '../assets/cycle.png'
import dot from '../assets/section_1_dot.png'
export const Hero = () => {
  return (
    <div className=''>
      <Container className=' position-relative'>
        <Row className='vh-100 align-items-center'>
          <Col lg={7}>
            <p className='mb-0 clr_dark_green ff_Anybody fw_700 fs_90'>Largest and reliable courier service <br /> in your city </p>
            <p className='mb-0 pb-5 pt-5 ff_Red-Hat-Text fw_400 fs_25 clr_grey'>Duis aute irure dolor in reprehenderit in voluptate cillum dolore <br /> eu fugiat nulla pariatur.</p>
            <div className='d-inline-block input_box bg_light_green d-flex align-items-center justify-content-between'>
              <input type="text" className='bg_light_green border-0 ff_Red-Hat-Text fw_400 fs_20 clr_grey' placeholder='Enter Tracking Number' />
              <a className='checkbutton ff_poppins fw_500 fs_30 text-white text-center' href="#">Check</a>
            </div>
          </Col>
          <img className=' position-absolute end-0 top-0' src={dot} />
          <Col lg={4} className=' position-relative'>
            <img className=' position-absolute' src={cycle} />
          </Col>
        </Row>
      </Container>

    </div>
  )
}
