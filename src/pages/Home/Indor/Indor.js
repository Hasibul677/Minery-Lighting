import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const Indor = () => {
    return (
        <div className='bg-dark mt-5 px-3 py-5'>
            <div>
                <Zoom right>
                <h2 className='text-white text-center mb-4'>INDOOR LIGHTS</h2>
                </Zoom>
            </div>
            <Row className='g-4'>
                <Col xm={12} md={12} lg={4}>
                    <Zoom left>
                    <img className='img-fluid' src="/images/indor/1.jpg" alt=""/>
                    <h4 className='text-white text-center mt-3'>Table Lamps</h4>
                    </Zoom>
                </Col>
                <Col xm={12} md={12} lg={4}>
                    <Zoom top>
                    <img className='img-fluid' src="/images/indor/2.jpg" alt=""/>
                    <h4 className='text-white text-center mt-3'>Floor Lamps</h4>
                    </Zoom>
                </Col>
                <Col xm={12} md={12} lg={4}>
                    <Zoom bottom>
                    <img className='img-fluid' src="/images/indor/3.jpg" alt=""/>
                    <h4 className='text-white text-center mt-3'>Bedroom Lighting</h4>
                    </Zoom>
                </Col>
            </Row>
        </div>
    );
};

export default Indor;