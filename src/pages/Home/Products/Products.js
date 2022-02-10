import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import ProductInfo from './ProductInfo/ProductInfo';
import { Row } from 'react-bootstrap';
import Roll from 'react-reveal/Roll';


const Products = () => {
    const [products, setProduts] = useState([]);
    useEffect(() => {
        fetch('https://salty-taiga-52197.herokuapp.com/products?quantity=6')
            .then(res => res.json())
            .then(data => {
                setProduts(data);
            })
    }, [])
    return (
        <div>
            <Box>
                <Typography sx={{ textAlign: 'center', mt: 5, fontFamily: 'cursive' }} variant="h4" gutterBottom component="div">
                    <Roll bottom>
                        Exclusive Lighting
                    </Roll>
                </Typography>
                <Container>
                    <Row className='g-4'>
                        {
                            products.map(product => <ProductInfo
                                key={product._id}
                                product={product}></ProductInfo>)
                        }
                    </Row>
                </Container>
            </Box>
        </div>
    );
};

export default Products;