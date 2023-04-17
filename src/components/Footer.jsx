import React from 'react'
import navlogo from '../assets/navlogo.png'
import footer_back from '../assets/footer_back.png'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className=' position-relative py-5'>
            <span><img className=' position-absolute footer_img d-none d-xl-block' src={footer_back} alt="" /></span>


            <Container className='py-5'>
                <Row>
                    <Col lg={4} xs={12} className='border_footer '>
                        <div className='d-flex  flex-column '>
                            <a href="#"><img className='navlogo effect ' src={navlogo} alt="navlogo" />
                            </a>
                            <p className='fw_400 fs_18 ff_Red_Hat_Display clr_grey mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..</p>
                        </div>
                    </Col>
                    <Col lg={8} xs={12}>
                        <Row>
                            <Col lg={4} sm={6} xs={12} className='d-flex flex-column align-items-start align-items-lg-center border_footer mt-5 mt-lg-0'>
                                <ul className=''>
                                    <li><p className='fw_700 fs_22 ff_Anybody clr_dark_green'>Quick link</p></li>
                                    <li className='pt-3'><a className='fw_400 fs_18 ff_Red_Hat_Display clr_grey' href="#">Tracking</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_18 ff_Red_Hat_Display clr_grey' href="#">Shipping</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_18 ff_Red_Hat_Display clr_grey' href="#">Locations</a></li>
                                    <li className='pt-3'><a className='fw_400 fs_18 ff_Red_Hat_Display clr_grey' href="#">Support</a></li>
                                </ul>
                            </Col>
                            <Col lg={4} sm={6} xs={12} className='border_footer mt-5 mt-lg-0'>
                                <ul className=''><p className='fw_700 fs_22 ff_Anybody clr_dark_green'>Contact us</p>
                                    <li className='pt-4'>
                                        <a href="#"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.259 10.9467V12.9467C14.2597 13.1324 14.2217 13.3162 14.1473 13.4863C14.0729 13.6564 13.9638 13.8091 13.827 13.9346C13.6902 14.0602 13.5287 14.1557 13.3528 14.2152C13.1769 14.2747 12.9905 14.2968 12.8056 14.2801C10.7542 14.0572 8.78362 13.3562 7.05229 12.2334C5.4415 11.2098 4.07584 9.84418 3.05229 8.2334C1.9256 6.4942 1.22445 4.51406 1.00562 2.4534C0.988959 2.26904 1.01087 2.08324 1.06995 1.90781C1.12904 1.73239 1.224 1.57119 1.3488 1.43448C1.47359 1.29777 1.62549 1.18854 1.79481 1.11375C1.96414 1.03895 2.14718 1.00024 2.33229 1.00006H4.33229C4.65582 0.99688 4.96948 1.11145 5.21479 1.32242C5.46011 1.53339 5.62034 1.82636 5.66562 2.14673C5.75003 2.78678 5.90659 3.41522 6.13229 4.02006C6.22198 4.25868 6.24139 4.51801 6.18822 4.76732C6.13505 5.01663 6.01153 5.24547 5.83229 5.42673L4.98562 6.2734C5.93466 7.94243 7.31659 9.32436 8.98562 10.2734L9.83229 9.42673C10.0135 9.24749 10.2424 9.12396 10.4917 9.07079C10.741 9.01762 11.0003 9.03704 11.239 9.12673C11.8438 9.35243 12.4722 9.50898 13.1123 9.5934C13.4361 9.63909 13.7319 9.8022 13.9433 10.0517C14.1547 10.3013 14.2671 10.6198 14.259 10.9467Z" stroke="#777E90" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </a><a className='fw_400 fs_18 ff_Red_Hat_Display clr_grey ms-3' href="#">
                                            (209) 555-0104</a></li>
                                    <li className='pt-4'>
                                        <a href="#"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.75 14.75H3.5C2.125 14.75 1 13.625 1 12.25V3.5C1 2.125 2.125 1 3.5 1H14.75C16.125 1 17.25 2.125 17.25 3.5V12.25C17.25 13.625 16.125 14.75 14.75 14.75Z" stroke="#777E90" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1 6L9.125 11L17.25 6" stroke="#777E90" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></a>
                                        <a className='fw_400 fs_18 ff_Red_Hat_Display clr_grey ms-3' href="#">
                                            michelle.rivera@example.com</a></li>
                                    <li className='pt-4'>
                                        <a href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.99785 0.622559C6.2083 0.622559 3.12346 3.7074 3.12346 7.49694C3.12346 14.1649 9.6103 19.2341 9.6103 19.2341C9.72103 19.3225 9.85849 19.3706 10.0002 19.3706C10.1418 19.3706 10.2793 19.3225 10.39 19.2341C10.39 19.2341 16.8769 14.1649 16.8768 7.49694C16.8768 3.7074 13.7874 0.622559 9.99785 0.622559V0.622559ZM9.99785 1.87287C13.1118 1.87287 15.6265 4.38294 15.6265 7.49694C15.6265 12.9519 10.687 17.2617 10.0025 17.8454C9.32117 17.2646 4.37377 12.954 4.37377 7.49694C4.37377 4.38294 6.88385 1.87287 9.99785 1.87287Z" fill="#777E90" />
                                            <path d="M9.99785 4.37354C8.27936 4.37354 6.87439 5.77852 6.87439 7.497C6.87438 9.2155 8.27935 10.6251 9.99785 10.6251C11.7163 10.6251 13.1259 9.2155 13.1259 7.497C13.1259 5.77852 11.7163 4.37354 9.99785 4.37354ZM9.99785 5.62384C11.0408 5.62384 11.8756 6.45406 11.8756 7.497C11.8756 8.53993 11.0408 9.37476 9.99785 9.37476C8.95491 9.37476 8.12469 8.53993 8.12469 7.497C8.1247 6.45406 8.95491 5.62384 9.99785 5.62384Z" fill="#777E90" />
                                        </svg></a>
                                        <a className='fw_400 fs_18 ff_Red_Hat_Display clr_grey ms-3' href="#">

                                            2715 Ash Dr. San Jose, South Dakota 83475</a></li></ul>
                            </Col>
                            <Col lg={4} sm={6} xs={12} className='mt-5 mt-lg-0'>
                                <ul>
                                    <li><p className='fw_700 fs_22 ff_Anybody clr_dark_green'>Subscribe</p></li>
                                    <li className='pt-5'><input className='name fw_400 fs_18 ff_Red_Hat_Display clr_grey' type="text" placeholder='Name' /></li>
                                    <li className='pt-4'><input className='email pt-3' type="Email" id='email' placeholder='Email' /></li>
                                    <li><a className='fw_400 fs_20 ff_Poppins clr_white Subscribe_btn d-inline-block mt-5' href="#">Subscribe</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className='line_footer mt-5' />
                <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center pt-4 text-center'>
                    <p className='fw_400 fs_22 ff_Red_Hat_Display clr_grey'>Copyright 2023 | Uitaskca - All rights Reserved</p>
                    <div>
                        <a className='ps-lg-5 ps-4 footer_img' href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.6667C13.6819 16.6667 16.6667 13.682 16.6667 10.0001C16.6667 6.31818 13.6819 3.33341 10 3.33341C6.31812 3.33341 3.33335 6.31818 3.33335 10.0001C3.33335 13.682 6.31812 16.6667 10 16.6667ZM10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" fill="#777E91" />
                            <path d="M10 8.33325C10 7.87302 10.3731 7.49992 10.8334 7.49992H11.6667C12.1269 7.49992 12.5 7.12683 12.5 6.66659C12.5 6.20635 12.1269 5.83325 11.6667 5.83325H10.8334C9.4526 5.83325 8.33335 6.95254 8.33335 8.33325V9.99992H7.50002C7.03979 9.99992 6.66669 10.373 6.66669 10.8333C6.66669 11.2935 7.03978 11.6666 7.50002 11.6666H8.33335V16.6666C8.33335 17.1268 8.70644 17.4999 9.16669 17.4999C9.62694 17.4999 10 17.1268 10 16.6666V11.6666H11.6667C12.1269 11.6666 12.5 11.2935 12.5 10.8333C12.5 10.373 12.1269 9.99992 11.6667 9.99992H10V8.33325Z" fill="#777E91" />
                        </svg>
                        </a>
                        <a className='ps-lg-5 ps-4 footer_img' href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.65061 11.6665C1.2725 11.6704 0.382908 13.2403 1.23191 14.4298C2.44776 16.133 4.65255 17.5 8.3334 17.5C14.0376 17.5 18.6165 12.8514 17.9755 7.35925L18.9146 5.48108C19.5658 4.17857 18.4341 2.69685 17.0061 2.98245L15.7655 3.23057C15.4366 3.05702 15.0961 2.92606 14.8052 2.83117C14.2382 2.64627 13.552 2.5 12.9167 2.5C11.7756 2.5 10.7908 2.79276 10.0081 3.37994C9.2344 3.96053 8.79856 4.72354 8.5594 5.42421C8.44915 5.74717 8.37573 6.07112 8.32862 6.38203C7.8859 6.24269 7.43447 6.05522 6.99252 5.82629C5.98986 5.30693 5.17906 4.64852 4.72169 4.07126C3.95433 3.10275 2.32813 3.17456 1.75748 4.43351C0.953197 6.20789 1.17382 8.31122 1.89677 10.0108C2.13909 10.5803 2.4543 11.1434 2.83939 11.6652C2.77346 11.666 2.7104 11.6663 2.65061 11.6665ZM8.33331 15.8333C5.11386 15.8333 3.44914 14.6672 2.58835 13.4614C2.54967 13.4072 2.58867 13.3333 2.65523 13.3332C3.53093 13.3307 5.32843 13.2892 6.51393 12.5954C6.57524 12.5595 6.56175 12.4691 6.49441 12.4465C3.73094 11.5173 2.16008 7.58216 3.2754 5.12158C3.30097 5.06517 3.37681 5.05772 3.41528 5.10628C4.68934 6.71432 7.47501 8.28933 9.89865 8.33242C9.95123 8.33333 9.99098 8.28558 9.98298 8.23361C9.88531 7.60044 9.5124 4.16667 12.9166 4.16667C13.7296 4.16667 14.9391 4.56319 15.3846 4.96942C15.4051 4.98819 15.4331 4.99672 15.4604 4.99125L17.3329 4.61675C17.4009 4.60315 17.4548 4.67371 17.4238 4.73573L16.2624 7.05849C16.2543 7.07462 16.2518 7.09312 16.2549 7.11088C17.0683 11.6833 13.3233 15.8333 8.33331 15.8333Z" fill="#777E91" />
                        </svg>
                        </a>
                        <a className='ps-lg-5 ps-4 footer_img' href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3334 3.33341H6.66669C4.82574 3.33341 3.33335 4.8258 3.33335 6.66675V13.3334C3.33335 15.1743 4.82574 16.6667 6.66669 16.6667H13.3334C15.1743 16.6667 16.6667 15.1743 16.6667 13.3334V6.66675C16.6667 4.8258 15.1743 3.33341 13.3334 3.33341ZM6.66669 1.66675C3.90526 1.66675 1.66669 3.90532 1.66669 6.66675V13.3334C1.66669 16.0948 3.90526 18.3334 6.66669 18.3334H13.3334C16.0948 18.3334 18.3334 16.0948 18.3334 13.3334V6.66675C18.3334 3.90532 16.0948 1.66675 13.3334 1.66675H6.66669Z" fill="#777E91" />
                            <path d="M14.1666 6.66667C14.6269 6.66667 15 6.29357 15 5.83333C15 5.3731 14.6269 5 14.1666 5C13.7064 5 13.3333 5.3731 13.3333 5.83333C13.3333 6.29357 13.7064 6.66667 14.1666 6.66667Z" fill="#777E91" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1666 9.99992C14.1666 12.3011 12.3011 14.1666 9.99998 14.1666C7.6988 14.1666 5.83331 12.3011 5.83331 9.99992C5.83331 7.69874 7.6988 5.83325 9.99998 5.83325C12.3011 5.83325 14.1666 7.69874 14.1666 9.99992ZM12.5 9.99992C12.5 11.3807 11.3807 12.4999 9.99998 12.4999C8.61923 12.4999 7.49998 11.3807 7.49998 9.99992C7.49998 8.61917 8.61923 7.49992 9.99998 7.49992C11.3807 7.49992 12.5 8.61917 12.5 9.99992Z" fill="#777E91" />
                        </svg>

                        </a>
                        <a className='ps-lg-5 ps-4 footer_img' href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1666 3.33325C13.7064 3.33325 13.3333 3.70635 13.3333 4.16659C13.3333 4.62682 13.7064 4.99992 14.1666 4.99992H17.5C17.9602 4.99992 18.3333 4.62682 18.3333 4.16659C18.3333 3.70635 17.9602 3.33325 17.5 3.33325H14.1666Z" fill="#777E91" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 10.8334C11.6667 8.53225 13.5322 6.66675 15.8334 6.66675C18.1345 6.66675 20 8.53225 20 10.8334V11.6667C20 12.127 19.6269 12.5001 19.1667 12.5001H13.3334C13.3334 13.8808 14.4526 15.0001 15.8334 15.0001C16.4146 15.0001 16.9494 14.8017 17.374 14.4691C17.5958 14.2952 17.8578 14.1667 18.1396 14.1667C18.8537 14.1667 19.3106 14.9043 18.811 15.4147C18.0547 16.1872 17 16.6667 15.8334 16.6667C13.5322 16.6667 11.6667 14.8012 11.6667 12.5001V10.8334ZM15.8334 8.33341C14.4526 8.33341 13.3334 9.45266 13.3334 10.8334H18.3334C18.3334 9.45266 17.2141 8.33341 15.8334 8.33341Z" fill="#777E91" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66667 4.99992V8.33325H5.83333C6.75381 8.33325 7.5 7.58706 7.5 6.66659C7.5 5.74611 6.75381 4.99992 5.83333 4.99992H1.66667ZM8.16648 9.04725C8.78375 8.44225 9.16667 7.59914 9.16667 6.66659C9.16667 4.82564 7.67428 3.33325 5.83333 3.33325H1.33333C0.596953 3.33325 0 3.93021 0 4.66659V15.238C0 16.027 0.639594 16.6666 1.42858 16.6666H5.83333C8.13452 16.6666 10 14.8011 10 12.4999C10 11.0632 9.27283 9.79634 8.16648 9.04725ZM1.66667 9.99992V14.9999H5.83333C7.21404 14.9999 8.33333 13.8807 8.33333 12.4999C8.33333 11.1192 7.21404 9.99992 5.83333 9.99992H1.66667Z" fill="#777E91" />
                        </svg>
                        </a>
                        <a className='ps-lg-5 ps-4 footer_img' href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.6667C13.6819 16.6667 16.6667 13.682 16.6667 10.0001C16.6667 6.31818 13.6819 3.33341 10 3.33341C6.31812 3.33341 3.33335 6.31818 3.33335 10.0001C3.33335 13.682 6.31812 16.6667 10 16.6667ZM10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" fill="#777E91" />
                            <path d="M12.8952 17.8167C12.5993 15.7082 12.1063 13.7946 11.4124 11.9858C9.71377 12.8093 7.81394 14.2482 5.20164 16.8141C4.74459 16.4916 4.32143 16.1244 3.93855 15.7187C6.68219 13.013 8.77769 11.3954 10.7634 10.4486C10.5087 9.89637 10.234 9.35196 9.93919 8.81254C7.60129 9.54937 4.93559 9.93762 1.66669 9.99312C1.66715 9.42112 1.72525 8.86254 1.8355 8.32293C4.72045 8.26112 7.0542 7.92722 9.0741 7.33376C8.13654 5.82934 7.03765 4.34437 5.77477 2.81576C6.2672 2.52552 6.79207 2.28447 7.34264 2.09937C8.61702 3.66567 9.7336 5.2051 10.6898 6.77942C12.4862 6.06937 14.0784 5.11107 15.6679 3.89098C16.0764 4.27018 16.4469 4.68987 16.7728 5.14364C15.1196 6.42239 13.4338 7.45881 11.5244 8.24011C11.8054 8.76487 12.0689 9.29546 12.3152 9.83396C14.204 9.23554 16.0633 9.17371 18.2923 9.16737C18.3194 9.44121 18.3334 9.71904 18.3334 10C18.3334 10.2816 18.3194 10.56 18.2921 10.8344C16.1385 10.842 14.5414 10.9027 12.9641 11.3775C13.6414 13.1405 14.1424 15.0042 14.464 17.0381C13.9735 17.3499 13.4482 17.6118 12.8952 17.8167Z" fill="#777E91" />
                        </svg>
                        </a></div>
                </div>
            </Container>
        </section>
    )

}

export default Footer