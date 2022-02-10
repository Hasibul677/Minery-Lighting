import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className='bg-dark text-white pt-5'>
            <Container>
            <Row className='g-3'>
                <Col xm={12} md={6} lg={3}>
                    <div className='ps-4'>
                        <div className='mb-4'>
                            <img className='w-50' src="/images/footer/logo.png" alt="" />
                        </div>
                        <div>
                            <p>Sophisticated simplicity for the
                                independent mind.</p>
                            <div>
                                <span className='me-2'> <TwitterIcon /></span>
                                <span className='me-2'> <InstagramIcon /></span>
                                <span className='me-2'> <FacebookIcon /></span>
                                <span className='me-2'> <YouTubeIcon /></span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xm={12} md={6} lg={3}>
                    <div>
                        <h4>Help & Infomation</h4>
                        <hr style={{borderBottom:'3px solid white', width:'25%'}}/>
                        <div className='mt-4'>
                            <p className='me-2'>Pagination</p>
                            <p className='me-2'>Terms & Conditions</p>
                            <p className='me-2'>Contact</p>
                            <p className='me-2'>Accessories</p>
                            <p className='me-2'>Term of use</p>
                        </div>
                    </div>
                </Col>
                <Col xm={12} md={6} lg={3}>
                    <div>
                        <h4>About Us</h4>
                        <hr style={{borderBottom:'3px solid white', width:'25%'}}/>
                        <div className='mt-4'>
                            <p className='me-2'>Help Center</p>
                            <p className='me-2'>Address Store</p>
                            <p className='me-2'>Privacy Policy</p>
                            <p className='me-2'>Receivers & Amplifiers</p>
                            <p className='me-2'>MineryStore</p>
                        </div>
                    </div>
                </Col>
                <Col xm={12} md={6} lg={3}>
                    <div>
                        <h4>Categories</h4>
                        <hr style={{borderBottom:'3px solid white', width:'25%'}}/>
                        <div className='mt-4'>
                            <p className='me-2'>Ceiling Fans</p>
                            <p className='me-2'>Ceiling Lights</p>
                            <p className='me-2'>Novelty Lights</p>
                            <p className='me-2'>Night Lights</p>
                            <p className='me-2'>Wall Lights</p>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
            <div style={{backgroundColor:'black'}} className='d-lg-flex justify-content-between align-items-center mt-5 px-2 py-4'>
                <div>
                © Copyright 2021 | MineryStore By Md Hasibul Hasan
                </div>
                <div>
              <img src="https://cdn.shopify.com/s/files/1/0562/1622/3924/files/pay_copyright.png?v=1618902909" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;