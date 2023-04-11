import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import man from '../assets/man.png'
export const Calculate = () => {
    const ref = useRef()
    return (
        <div className='bg_light_green_xl'>
            <Container className=' bg_light_green rounded-3'>
                <Row className='pt-5'>
                    <Col xl={6} xs={12} className='ps-sm-5 position-relative d-flex flex-column justify-content-xl-start justify-content-center'>
                        <p className=' ps-sm-5 ff_Anybody fw_700 fs_48 clr_dark_green'>Calculate your price</p>
                        <p className=' ps-sm-5  pb-5 mb-0 ff_Red-Hat-Display fw_400 fs_22 clr_grey'>Duis aute irure dolor in reprehenderit in voluptate <br /> cillum dolore eu fugiat nulla pariatur.</p>
                        <img src={man} className=' .w_xl_75 pos ition_absolute_xl bottom-0' />
                    </Col>
                    <Col xl={6} xs={12} className='p-xl-5 ps-sm-5 pe-sm-5 pb-5'>
                        <div className=' bg-white w-100 h-100 rounded-5 p-5'>
                            <div>
                                <div className=' d-flex flex-column flex-sm-row align-items-center mb-4'>
                                    <div className='date_hover pointer abs bg_green date_box d-flex justify-content-center align-items-center'>
                                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.975 2.52233H19.125V0.125H16.75V2.52233H7.25V0.125H4.875V2.52233H2.06347C1.0142 2.52233 0.163475 3.37305 0.163475 4.42233V21.975C0.163475 23.0243 1.0142 23.875 2.06347 23.875H21.975C23.0243 23.875 23.875 23.0243 23.875 21.975V4.42233C23.875 3.37305 23.0243 2.52233 21.975 2.52233ZM21.5 21.5H2.5V9.625H21.5V21.5ZM21.5 7.25H2.5V4.875H21.5V7.25Z" fill="white" />
                                            <path d="M13.425 12H11.05V14.375H13.425V12Z" fill="white" />
                                            <path d="M18.175 12H15.8V14.375H18.175V12Z" fill="white" />
                                            <path d="M13.425 16.75H11.05V19.125H13.425V16.75Z" fill="white" />
                                            <path d="M8.675 16.75H6.3V19.125H8.675V16.75Z" fill="white" />
                                        </svg>
                                        </span>
                                    </div>
                                    <p className='mb-0 ff_Anybody fw_700 fs_22 clr_light_black ps-4 pt-4 pt-sm-0'>Booking Date</p>
                                </div>
                                <div className='  d-flex input_border_bottom pb-2'>
                                    {/* <input
                                    type="text"
                                    ref={ref}
                                    placeholder='hello'
                                    onChange={(e) => console.log(e.target.value)}
                                    onFocus={() => (ref.current.type = "date")}
                                    onBlur={() => (ref.current.type = "date")}
                                /> */}
                                    <input className='w-100 border-0 ff_Red-Hat-Display fw_500 fs_18 clr_grey' type="text" placeholder='Enter Booking date' id='date' />
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.975 2.52233H19.125V0.125H16.75V2.52233H7.25V0.125H4.875V2.52233H2.06347C1.0142 2.52233 0.163475 3.37305 0.163475 4.42233V21.975C0.163475 23.0243 1.0142 23.875 2.06347 23.875H21.975C23.0243 23.875 23.875 23.0243 23.875 21.975V4.42233C23.875 3.37305 23.0243 2.52233 21.975 2.52233ZM21.5 21.5H2.5V9.625H21.5V21.5ZM21.5 7.25H2.5V4.875H21.5V7.25Z" fill="#3CBD96" />
                                        <path d="M13.425 12H11.05V14.375H13.425V12Z" fill="#3CBD96" />
                                        <path d="M18.175 12H15.8V14.375H18.175V12Z" fill="#3CBD96" />
                                        <path d="M13.425 16.75H11.05V19.125H13.425V16.75Z" fill="#3CBD96" />
                                        <path d="M8.675 16.75H6.3V19.125H8.675V16.75Z" fill="#3CBD96" />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                            {/* ////////////////////////////////////////// */}
                            <div className='mt-3 pt-3'>
                                <div className=' d-flex flex-column flex-sm-row align-items-center mb-4'>
                                    <div className='date_hover pointer abs bg_green date_box d-flex justify-content-center align-items-center'>
                                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 2.5L19.875 2.375C18.875 1.375 17.375 0.75 16 0.75H8C6.625 0.75 5.25 1.375 4.125 2.375L4 2.5L1.875 5.5C1.125 6.625 0.75 7.875 0.75 9.125V18.25C0.75 21 3 23.25 5.75 23.25H18.25C21 23.25 23.25 21 23.25 18.25V9.125C23.25 7.875 22.875 6.625 22.125 5.5L20 2.5ZM3.875 7L5.875 4.125C6.5 3.5 7.25 3.25 8 3.25H15.875C16.625 3.25 17.375 3.5 18 4.125L20.125 7H14.875H9.125H3.875ZM13.625 9.5V12.625L12.5 12.125C12.375 12 12.125 12 12 12C11.875 12 11.625 12 11.5 12.125L10.375 12.625V9.5H13.625ZM20.75 18.25C20.75 19.625 19.625 20.75 18.25 20.75H5.75C4.375 20.75 3.25 19.625 3.25 18.25V9.5H7.875V14.5C7.875 14.875 8.125 15.375 8.5 15.5C8.875 15.75 9.25 15.75 9.625 15.625L12 14.625L14.375 15.625C14.5 15.75 14.75 15.75 14.875 15.75C15.125 15.75 15.375 15.625 15.5 15.5C15.875 15.25 16.125 14.875 16.125 14.5V9.5H20.75V18.25Z" fill="white" />
                                        </svg>

                                        </span>
                                    </div>
                                    <p className='mb-0 ff_Anybody fw_700 fs_22 clr_light_black ps-4 pt-4 pt-sm-0'>Type of Parcel</p>
                                </div>
                                <div className=' d-flex input_border_bottom pb-2'>
                                    {/* <input
                                    type="text"
                                    ref={ref}
                                    placeholder='hello'
                                    onChange={(e) => console.log(e.target.value)}
                                    onFocus={() => (ref.current.type = "date")}
                                    onBlur={() => (ref.current.type = "date")}
                                /> */}
                                    <div className='pt-3 '>
                                        <form action="/action_page.php">
                                            <div className='pb-2'>
                                                <select id="parcel_2" name="parcel" className='border-0 active_border_none ff_Red-Hat-Display fw_500 fs_18 clr_grey'>
                                                    <option value="To">Select Parcel type</option>
                                                    <option value="To">Big</option>
                                                    <option value="To">Normal</option>
                                                    <option value="To">Small</option>
                                                    <option value="To">Don't know</option>
                                                </select>
                                            </div>
                                            <div className='hr_2'></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* ///////////////////////////////// */}
                            <div className='mt-3 pt-3'>
                                <div className=' d-flex flex-column flex-sm-row align-items-center mb-4'>
                                    <div className='date_hover pointer abs bg_green date_box d-flex justify-content-center align-items-center'>
                                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 2.5L19.875 2.375C18.875 1.375 17.375 0.75 16 0.75H8C6.625 0.75 5.25 1.375 4.125 2.375L4 2.5L1.875 5.5C1.125 6.625 0.75 7.875 0.75 9.125V18.25C0.75 21 3 23.25 5.75 23.25H18.25C21 23.25 23.25 21 23.25 18.25V9.125C23.25 7.875 22.875 6.625 22.125 5.5L20 2.5ZM3.875 7L5.875 4.125C6.5 3.5 7.25 3.25 8 3.25H15.875C16.625 3.25 17.375 3.5 18 4.125L20.125 7H14.875H9.125H3.875ZM13.625 9.5V12.625L12.5 12.125C12.375 12 12.125 12 12 12C11.875 12 11.625 12 11.5 12.125L10.375 12.625V9.5H13.625ZM20.75 18.25C20.75 19.625 19.625 20.75 18.25 20.75H5.75C4.375 20.75 3.25 19.625 3.25 18.25V9.5H7.875V14.5C7.875 14.875 8.125 15.375 8.5 15.5C8.875 15.75 9.25 15.75 9.625 15.625L12 14.625L14.375 15.625C14.5 15.75 14.75 15.75 14.875 15.75C15.125 15.75 15.375 15.625 15.5 15.5C15.875 15.25 16.125 14.875 16.125 14.5V9.5H20.75V18.25Z" fill="white" />
                                        </svg>

                                        </span>
                                    </div>
                                    <p className='mb-0 ff_Anybody fw_700 fs_22 clr_light_black ps-4 pt-4 pt-sm-0'>Type of Parcel</p>
                                </div>

                                <Row className=' d-flex pb-2 justify-content-between'>
                                    <Col xs={6} className='pt-3 '>
                                        <form action="/action_page.php" className='input_border_bottom'>
                                            <div className='pb-2'>
                                                {/* <label for="parcel" className='fw_500 fs_18 ff_display lightgrey'>Select Parcel type</label> */}
                                                {/* <input type="text" placeholder='To' className='fw_500 fs_18 ff_display lightgrey input_style' /> */}
                                                <select id="parcel_2" className='input_border_bottom border-0' name="parcel">
                                                    <option value="To">To</option>
                                                    <option value="To">Khokha</option>
                                                    <option value="To">Hisar</option>
                                                    <option value="To">Hansi</option>
                                                    <option value="To">Barwala</option>
                                                </select>
                                            </div>
                                            <div className='hr_2'></div>
                                        </form>
                                    </Col>
                                    <Col xs={6} className='pt-3'>
                                        <form action="/action_page.php" className='input_border_bottom'>
                                            <div className='pb-2'>
                                                {/* <label for="parcel" className='fw_500 fs_18 ff_display lightgrey'>Select Parcel type</label> */}
                                                {/* <input type="text" placeholder='From' className='fw_500 fs_18 ff_display lightgrey input_style' /> */}
                                                <select id="parcel_2" className='input_border_bottom border-0' name="parcel">
                                                    <option value="From">From</option>
                                                    <option value="From">Khokha</option>
                                                    <option value="From">Hisar</option>
                                                    <option value="From">Hansi</option>
                                                    <option value="From">Barwala</option>
                                                </select>
                                            </div>
                                            <div className='hr_2'></div>
                                        </form>
                                    </Col>
                                </Row>
                            </div>
                            {/* button calculate */}
                            <a className=' text-center text-sm-start ff_poppins fw_400 fs_20 clr_white calculate_btn bg_green mt-5 d-inline-block' href="#">Calculate</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
