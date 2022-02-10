import React from 'react';
import './BestSeller.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';

const BestSeller = () => {
    return (
        <div className='my-5 py-5 bg-color' style={{ fontFamily: 'cursive' }}>
            <Container className='bg-infor'>
                <div>
                    <h1>Best Seller</h1>
                    <small>Best seller Product This Week!</small>
                    <hr style={{ border: '2px solid blue' }} />
                </div>
                <Row className='g-4'>
                    <Col xm={12} md={6} lg={3}>
                        <Card className='overflow-hidden' style={{ maxHeight: '400px' }}>
                            <Card.Img className='r-image' src="/images/best/1.jpg" alt="" />
                            <Card.Text className='ps-2'>
                                <h6>Multi-Directional LED</h6>
                                <strong><del className='text-danger'>90</del> $50</strong>
                            </Card.Text>
                            <Card.Text className='saller-info'>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><FavoriteBorderIcon /></button>
                                    <button className='btn'><SearchIcon /></button>
                                </div>
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col xm={12} md={6} lg={3}>
                        <Card className='overflow-hidden' style={{ maxHeight: '400px' }}>
                            <Card.Img className='r-image' src="/images/best/2.jpg" alt="" />
                            <Card.Text className='ps-2'>
                                <h6>Rated 2-Light Brushed</h6>
                                <strong><del className='text-danger'>80</del> $70</strong>
                            </Card.Text>
                            <Card.Text className='saller-info'>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><FavoriteBorderIcon /></button>
                                    <button className='btn'><SearchIcon /></button>
                                </div>
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col xm={12} md={6} lg={3}>
                        <Card className='overflow-hidden' style={{ maxHeight: '400px' }}>
                            <Card.Img className='r-image' src="/images/best/3.jpg" alt="" />
                            <Card.Text className='ps-2'>
                                <h6>Rattan Pendant Light</h6>
                                <strong><del className='text-danger'>80</del> $69</strong>
                            </Card.Text>
                            <Card.Text className='saller-info'>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><FavoriteBorderIcon /></button>
                                    <button className='btn'><SearchIcon /></button>
                                </div>
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col xm={12} md={6} lg={3}>
                        <Card className='overflow-hidden' style={{ maxHeight: '400px' }}>
                            <Card.Img className='r-image' src="/images/best/4.jpg" alt="" />
                            <Card.Text className='ps-2'>
                                <h6>Kitchen Farmhouse Lighting</h6>
                                <strong><del className='text-danger'>100</del> $90</strong>
                            </Card.Text>
                            <Card.Text className='saller-info'>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><FavoriteBorderIcon /></button>
                                    <button className='btn'><SearchIcon /></button>
                                </div>
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col xm={12} md={6} lg={3}>
                        <Card className='overflow-hidden' style={{ maxHeight: '400px' }}>
                            <Card.Img className='r-image' src="/images/best/5.jpg" alt="" />
                            <Card.Text className='ps-2'>
                                <h6>Desk Lamp With Glass</h6>
                                <strong><del className='text-danger'>85</del> $80</strong>
                            </Card.Text>
                            <Card.Text className='saller-info'>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><FavoriteBorderIcon /></button>
                                    <button className='btn'><SearchIcon /></button>
                                </div>
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col xm={12} md={6} lg={3}>
                        <Card className='overflow-hidden' style={{ maxHeight: '400px' }}>
                            <Card.Img className='r-image' src="/images/best/6.jpg" alt="" />
                            <Card.Text className='ps-2'>
                                <h6>Modern Leather Table Lamps</h6>
                                <strong><del className='text-danger'>100</del> $80</strong>
                            </Card.Text>
                            <Card.Text className='saller-info'>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><FavoriteBorderIcon /></button>
                                    <button className='btn'><SearchIcon /></button>
                                </div>
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col xm={12} md={6} lg={3}>
                        <Card className='overflow-hidden' style={{ maxHeight: '400px' }}>
                            <Card.Img className='r-image' src="/images/best/7.jpg" alt="" />
                            <Card.Text className='ps-2'>
                                <h6>LED Ceiling Fan</h6>
                                <strong><del className='text-danger'>150</del> $130</strong>
                            </Card.Text>
                            <Card.Text className='saller-info'>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><FavoriteBorderIcon /></button>
                                    <button className='btn'><SearchIcon /></button>
                                </div>
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col xm={12} md={6} lg={3}>
                        <Card className='overflow-hidden' style={{ maxHeight: '400px' }}>
                            <Card.Img className='r-image' src="/images/best/9.jpg" alt="" />
                            <Card.Text className='ps-2'>
                                <h6>Down Lighting Table Lamp</h6>
                                <strong><del className='text-danger'>200</del> $180</strong>
                            </Card.Text>
                            <Card.Text className='saller-info'>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn'><FavoriteBorderIcon /></button>
                                    <button className='btn'><SearchIcon /></button>
                                </div>
                            </Card.Text>

                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default BestSeller;