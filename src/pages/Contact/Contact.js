import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Contact = () => {
    const { user } = useAuth();
    return (
        <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1475302389077-6ec2b24b95bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHVybGlzaCUyMGxhbXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`, minHeight: '600px', color: 'white' }}>
            <Container className='py-5'>
                <Row className='g-4'>
                    <Col xm={12} md={12} lg={6}>
                        <Card className='bg-dark py-5 ps-5'>
                            <h3 style={{ fontFamily: 'cursive' }}>Feel Free To Ask Any Question</h3>
                            <form className='form-design'>
                                <input className='form-control' type="" name="" value={user.displayName} />
                                <input className='form-control' type="" name="" placeholder='Subject' />
                                <textarea className='form-control' type="" name="" placeholder='Message' />
                                <button className='btn-primary rounded mt-3 w-25' type="submit">SEND</button>
                            </form>
                        </Card>

                    </Col>
                    <Col xm={12} md={12} lg={6}>
                        <Card className='bg-dark w-75 py-5 px-2' style={{fontFamily:'cursive'}}>
                            <div className='d-flex align-items-center'>
                            <span className='me-3'><AttachEmailIcon style={{fontSize:'40px'}}/></span>
                                <div>
                                    <span>hhasibul677@gamil.com</span><br />
                                    <span>rejected677@gamil.com</span>
                                </div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                            <span className='me-3'><PhoneInTalkIcon style={{fontSize:'40px'}}/></span>
                                <div>
                                    <span>+880 1795443674</span><br />
                                    <span>+880 1308555555</span>
                                </div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                            <span className='me-3'><AddLocationAltIcon style={{fontSize:'40px'}}/></span>
                                <div>
                                    <span>Sector-10, Uttara Model Town</span><br />
                                    <span>Dhaka-1230, Bangladesh</span>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className='me-3'>
                                    <span className='me-4'><TwitterIcon/></span>
                                    <span className='me-4'><InstagramIcon/></span>
                                    <span className='me-4'><FacebookIcon/></span>
                                    <span className='me-4'><YouTubeIcon/></span>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Contact;