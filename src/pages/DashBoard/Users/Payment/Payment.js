import React from 'react';
import './Payment.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import LockIcon from '@mui/icons-material/Lock';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Payment = () => {
    return (
        <div className='background container' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1587906697341-bfbde76785c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGF5bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`, height: "500px" }}>
            <Container>
            <h3 style={{ fontFamily: 'cursive' }} className='text-white display-4 pt-1 text-center'>Payment will be coming soon !!</h3>
                <Row>
                    <Col xm={12} md={12} lg={3}>
                    </Col>
                    <Col className='mt-5' xm={12} md={12} lg={6}>
                        <Card className='p-2'>
                            <form>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type="radio" id="pay1" name="age" value="30" />
                                        <label for="pay1"> PayPal</label><br />
                                    </div>
                                    <div>
                                        <img className='payment-image' src="/images/payment/1.jpg" alt="" />
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type="radio" id="pay2" name="age" value="30" />
                                        <label for="pay2"> Credit card</label><br />
                                    </div>
                                    <div>
                                        <img className='payment-image me-2' src="/images/payment/master.png" alt="" />
                                        <img className='payment-image' src="/images/payment/visa.jpg" alt="" />
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <span>Card Number</span><input className='form-control' value='1111 1111 1111 4444' />
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center px-2'>
                                    <span>Expiry <span className='ms-3'>MM/YY</span></span>
                                    <span>CVC <span className='ms-3'>123</span></span>
                                    <span><PowerSettingsNewIcon /></span>
                                </div>

                            </form>
                        </Card>
                        <button style={{ fontFamily: 'cursive' }} className='form-control mt-2 fs-5 btn-outline-success' type=""><LockIcon /> Finish & Pay</button>
                    </Col>
                    <Col xm={12} md={12} lg={3}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Payment;