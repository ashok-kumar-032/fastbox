import React from 'react'
import navlogo from '../assets/navlogo.png'
import { Container, Row, Col } from 'react-bootstrap';
const Mynav = () => {
    return (
        <Container className='py-4'>
            <div className="d-flex justify-content-between align-items-center ">
                <div className='d-flex align-items-center'>
                    <a href="#"><img className='navlogo effect w-100  position-relative' src={navlogo} alt="navlogo" />
                    </a>
                </div>
                <input type="checkbox" id="check" className="dis_none" />
                <label htmlFor="check" className="dis_none  dis_xsm_block">
                    <span className="d-flex justify-content-between h_20 flex-column">
                        <span className="menuitem"></span>
                        <span className="menuitem"></span>
                        <span className="menuitem"></span>
                    </span>
                </label>
                <div className='d-flex mb-0 pos_fixed_xsm left_0 center_xsm '>
                    <ul className="d-flex center_xsm" >
                        <li><a className='fw_400 fs_20 ff_Red-Hat-Text clr_grey mb-0 ms-xl-5 position-relative hover_line home effect' href="#">Home</a>
                        </li>
                        <li><a className='fw_400 fs_20 ff_Red-Hat-Text clr_grey mb-0 ms-xl-5 position-relative hover_line home effect' href="#">Tracking</a>
                        </li>
                        <li><a className='fw_400 fs_20 ff_Red-Hat-Text clr_grey mb-0 ms-xl-5 position-relative hover_line home effect' href="#">Tracking</a>
                        </li>
                        <li><a className='fw_400 fs_20 ff_Red-Hat-Text clr_grey mb-0 ms-xl-5 position-relative hover_line home effect' href="#">Locations</a>
                        </li>
                        <li><a className='fw_400 fs_20 ff_Red-Hat-Text clr_grey mb-0 ms-xl-5 position-relative hover_line home effect' href="#">Support</a>
                        </li>

                    </ul>
                    <ul className='d-flex center_xsm'>
                        <li><a className='fw_400 fs_20 ff_Red-Hat-Text clr_grey mb-0 ms-lg_5 position-relative hover_line home effect' href="#">Signin</a>
                        </li>
                        <li><a className='fw_400 fs_20 ff_Red-Hat-Text clr_white mb-0 ms-xl-5 Register_btn' href="#">Register</a>
                        </li>
                    </ul></div>
            </div>

        </Container>
    )
}

export default Mynav