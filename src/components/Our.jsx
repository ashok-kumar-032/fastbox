import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';

const Our = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <section className=' py-5'>
        <Container className='py-5'>
            <div className='d-flex align-items-center justify-content-center flex-column flex-lg-row text-center text-lg-start '>
                <p className='fw_700 fs_48 ff_Anybody clr_dark_green p-lg-5 ms-lg-5'>Our Specialties</p>
                <p className='fw_400 fs_22 ff_Red_Hat_Text clr_grey max_w_490'>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Slider {...settings} className='mt-4 '>
                {/* 1 */}
                <div className='p-3'>
                    <div className='d-flex justify-content-between p-4 box'>
                        <p className='fw_700 fs_45 ff_Poppins clr_l_green mt-4'>01</p>
                        <div className='p-2 ps-3'>
                            <p className='fw_700 fs_22 ff_Anybody  mt-4'>Easy to order</p>
                            <p className='fw_400 fs_18 ff_Red_Hat_Display clr_grey'>Stacks is a production-ready library of stackable content blocks built in React Native </p></div></div>
                </div>
                {/* 2 */}
                <div className='p-3'>
                    <div className='d-flex justify-content-between p-4 box'>
                        <p className='fw_700 fs_45 ff_Poppins clr_l_green mt-4'>02</p>
                        <div className='p-2 ps-3'>
                            <p className='fw_700 fs_22 ff_Anybody  mt-4'>Cash on delivery</p>
                            <p className='fw_400 fs_18 ff_Red_Hat_Display clr_grey'>Stacks is a production-ready library of stackable content blocks built in React Native </p></div></div>
                </div>
                {/* 3 */}
                <div className='p-3'>
                    <div className='d-flex justify-content-between p-4 box'>
                        <p className='fw_700 fs_45 ff_Poppins clr_l_green mt-4'>03</p>
                        <div className='p-2 ps-3'>
                            <p className='fw_700 fs_22 ff_Anybody  mt-4'>Live tracking</p>
                            <p className='fw_400 fs_18 ff_Red_Hat_Display clr_grey'>Stacks is a production-ready library of stackable content blocks built in React Native </p></div></div>
                </div>

            </Slider>
        </Container>
        </section>
    )
}

export default Our