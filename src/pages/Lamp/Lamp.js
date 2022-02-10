import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LightSpeed from 'react-reveal/LightSpeed';

const Lamp = () => {
    const [lamps, setLamps] = useState([]);
    const {admin} = useAuth();
    useEffect(() => {
        fetch('https://salty-taiga-52197.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setLamps(data);
            })
    }, [])
    return (
        <div style={{ minHeight: '600px' }}>
            <Box>
                <Typography sx={{ textAlign: 'center', mt: 5, fontFamily: 'cursive' }} variant="h4" gutterBottom component="div">
                    All Exclusive Lighting
                </Typography>
                <Container>
                    <Row className='g-4'>
                        {
                            lamps.map(lamp => <Display
                                key={lamp._id}
                                lamp={lamp}
                                admin={admin}></Display>)
                        }
                    </Row>
                </Container>
            </Box>
        </div>
    );
};

function Display({ lamp, admin }) {
    const {_id, name, price, description, image } = lamp;
    return (
        <Col md={4}>
            <LightSpeed right>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    className='p-image'
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <h4>Price ${price}</h4>
                    {!admin && <Link style={{textDecoration:'none'}} to={`/booking/${_id}`}><button className='btn btn-primary ms-5'>Buy Now</button></Link>}
                </CardActions>
            </Card>
            </LightSpeed>
        </Col>
    )
}

export default Lamp;