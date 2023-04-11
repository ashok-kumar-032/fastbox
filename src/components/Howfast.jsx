import React from 'react'
import Slider from "react-slick";
import slike_img from '../assets/slike_img.png'
import slike_img_1 from '../assets/slike_img_1.png'
import slike_img_2 from '../assets/slike_img_2.png'
import slike_img_3 from '../assets/slike_img_3.png'
import { Container, Row, Col } from 'react-bootstrap';
const Howfast = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container className=' overflow-hidden'>
            <div className='d-flex align-items-center justify-content-center flex-column flex-lg-row text-center text-lg-start '>
                <p className='fw_700 fs_48 ff_Anybody  clr_dark_green p-lg-5 ms-lg-5'>How Fast box works</p>
                <p className='fw_400 fs_22 ff_Red_Hat_Text clr_grey max_w_490'>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Slider {...settings} className='mt-5 pt-5'>
                {/* 1 */}
                <div className='d-flex align-items-center flex-column text-center border_line'>
                    <img src={slike_img} alt="" />
                    <p className='fw_600 fs_16 ff_Poppins clr_grey mt-4'>Step 1</p>
                    <p className='fw_700 fs_22 ff_Anybody clr_dark_green mt-4'>Booking </p>
                    <p className='max_w_295 fw_400 fs_18 ff_Red_Hat_Text clr_grey'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                {/* 2 */}
                <div className='d-flex align-items-center flex-column text-center border_line'>
                    <img src={slike_img_1} alt="" />
                    <p className='fw_600 fs_16 ff_Poppins clr_grey mt-4'>Step 2</p>
                    <p className='fw_700 fs_22 ff_Anybody clr_dark_green mt-4'>Packing  </p>
                    <p className='max_w_295 fw_400 fs_18 ff_Red_Hat_Text clr_grey'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                {/* 3 */}
                <div className='d-flex align-items-center flex-column text-center border_line'>
                    <img src={slike_img_2} alt="" />
                    <p className='fw_600 fs_16 ff_Poppins clr_grey mt-4'>Step 3</p>
                    <p className='fw_700 fs_22 ff_Anybody clr_dark_green mt-4'>Transportation  </p>
                    <p className='max_w_295 fw_400 fs_18 ff_Red_Hat_Text clr_grey'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                {/* 4 */}
                <div className='d-flex align-items-center flex-column text-center'>
                    <img src={slike_img_3} alt="" />
                    <p className='fw_600 fs_16 ff_Poppins clr_grey mt-4'>Step 4</p>
                    <p className='fw_700 fs_22 ff_Anybody clr_dark_green mt-4'>Delivery  </p>
                    <p className='max_w_295 fw_400 fs_18 ff_Red_Hat_Text clr_grey'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </Slider>
        </Container>
    )
}


export default Howfast