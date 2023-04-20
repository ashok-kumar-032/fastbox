import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { BiMenu } from 'react-icons/bi';
const Newnav = () => {
    const [first, setfirst] = useState(true)
    function clickshow() {
        setfirst(!first)

    }
    return (

        <Nav className=' py-3'>
            <Container>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <a href="#">logo</a>
                    </div>
                    <ul className={first ? 'nav_show d-flex gap-5' : 'nav_show d-flex showw gap-5'}>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                    <div className='z-10 d-md-none'>
                        <h3 onClick={clickshow}><BiMenu /></h3>
                    </div>
                </div>

            </Container >
        </Nav>


    )
}

export default Newnav