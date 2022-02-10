import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='my-5'>

            <Container>
                <div>
                    <h1 style={{ fontFamily: 'cursive', marginTop: '20px' }}>Our Blog</h1>
                    <hr style={{ border: '2px solid blue' }} />
                </div>
                <Row className='g-4'>
                    <Col xm={12} md={12} lg={4}>
                        <div>
                            <img className='rounded-circle blog' src="/images/blog/1.jpg" alt="" />
                        </div>
                        <div>
                            <h5 style={{ fontFamily: 'cursive', marginTop: '20px' }}>Quick Tips For Lighiting Your Home</h5>
                            <small>NOVEMBER 11, 2021</small>
                            <hr />
                            <p>Lighting really does have a language to it. There are terminologies to help us categorize the specific jobs they have in creating a cohesive lighting design.</p>
                        </div>
                    </Col>
                    <Col xm={12} md={12} lg={4}>
                        <div>
                            <img className='rounded-circle blog' src="/images/blog/2.jpg" alt="" />
                        </div>
                        <div>
                            <h5 style={{ fontFamily: 'cursive', marginTop: '20px' }}>Five Tips for Lighting Your House</h5>
                            <small>NOVEMBER 11, 2021</small>
                            <hr />
                            <p>Lighting really does have a language to it. There are terminologies to help us categorize the specific jobs they have in creating a cohesive lighting design.</p>
                        </div>
                    </Col>
                    <Col xm={12} md={12} lg={4}>
                        <div>
                            <img className='rounded-circle blog' src="/images/blog/3.jpg" alt="" />
                        </div>
                        <div>
                            <h5 style={{ fontFamily: 'cursive', marginTop: '20px' }}>How to fix a boring bedroom</h5>
                            <small>NOVEMBER 11, 2021</small>
                            <hr />
                            <p>Lighting really does have a language to it. There are terminologies to help us categorize the specific jobs they have in creating a cohesive lighting design.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;