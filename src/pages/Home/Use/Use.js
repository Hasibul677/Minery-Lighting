import React from 'react';
import './Use.css';
import { Col, Row } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const Use = () => {
    return (
        <div className='mt-5 px-3 pt-5'>
            <div>
                <h1 className='mt-5'>How to Use Lighting to Pull a Room Together</h1>
                <hr className='mb-5' style={{ border: '2px solid blue', width:'62%'}} />
            </div>
            <Row className='g-4'>
                <Col xm={12} md={12} lg={4}>
                <Bounce right>
                    <img className='use-Image mb-2' src="/images/use/1.jpg" alt="" />
                    </Bounce>
                    <Bounce left>
                    <img className='use-Image' src="/images/use/4.jpg" alt="" />
                    </Bounce>
                </Col>
                <Col xm={12} md={12} lg={4}>
                <Bounce top>
                    <img className='use-middle-Image' src="/images/use/3.jpg" alt="" />
                    </Bounce>
                </Col>
                <Col xm={12} md={12} lg={4}>
                <Bounce right>
                    <img className='use-Image mb-2' src="/images/use/2.jpg" alt="" />
                    </Bounce>
                    <Bounce left>
                    <img className='use-Image' src="/images/use/5.jpg" alt="" />
                    </Bounce>
                </Col>
                
            </Row>
        </div>
    );
};

export default Use;