import React from 'react';
import './ProductInfo.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import LightSpeed from 'react-reveal/LightSpeed';

const ProductInfo = ({ product }) => {
    const { _id, name, price, description, image } = product;
    const { admin } = useAuth()
    return (
        
            <Col md={4}>
                <LightSpeed left>
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
                        {!admin && <Link style={{ textDecoration: 'none' }} to={`/booking/${_id}`}><button className='btn btn-primary ms-5'>Buy Now</button></Link>}
                    </CardActions>
                </Card>
                </LightSpeed>
            </Col>
       
    );
};

export default ProductInfo;