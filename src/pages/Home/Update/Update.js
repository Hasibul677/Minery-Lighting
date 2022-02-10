import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Update = () => {
    return (
        <div className='background pt-5' style={{ backgroundImage: `url("https://media.istockphoto.com/photos/turkish-glass-mosaic-lamps-picture-id182387194?b=1&k=20&m=182387194&s=170667a&w=0&h=PUJuNe44WqfROJEmRKe6LJCpdWwizYxrumS89SUEUg4=")`, minHeight: '300px' }}>
            <Container>
                <Row className='g-4 pt-5'>
                    <Col xm={12} md={12} lg={6}>
                        <h1 className='text-white'>GET UPDATE</h1>
                        <p className='text-white'>Subscribe our newsletter and get discount 30% off</p>
                    </Col>
                    <Col xm={12} md={12} lg={6}>
                        <form className='d-flex mt-4'>
                            <input className='form-control w-75' type="email" placeholder='Enter your email' />
                            <button className='btn btn-info' style={{ marginLeft: '-20px' }}>SEND</button>
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Update;