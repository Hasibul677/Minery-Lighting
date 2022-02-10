import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import swal from 'sweetalert';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ManageProduct = () => {
    const [lamps, setLamps] = useState([]);
    useEffect(() => {
        fetch('https://salty-taiga-52197.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setLamps(data);
            })
    }, []);

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://salty-taiga-52197.herokuapp.com/allProducts/${id}`)
                    const remaningData = lamps.filter(lamp => lamp._id !== id)
                    setLamps(remaningData);
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    };

    return (
        <div>
            <Box>
                <Typography sx={{ textAlign: 'center', fontFamily: 'cursive' }} variant="h4" gutterBottom component="div">
                    Exclusive Lighting Admin Panel
                </Typography>
                <Container>
                    <Row className='g-4'>
                        {
                            lamps.map(lamp => <Display
                                key={lamp._id}
                                lamp={lamp}
                                handleDelete={handleDelete}
                               ></Display>)
                        }
                    </Row>
                </Container>
            </Box>
        </div>
    );
};

function Display({ lamp, handleDelete}) {
    const { _id, name, price, description, image } = lamp;
    return (
        <Col md={4}>
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
                    </CardActions>
                <CardActions>
                    <Link style={{textDecoration:'none'}} to={`/updateProduct/${_id}`}><button className='btn btn-primary ms-auto'>Update</button></Link>
                    <button onClick={() =>handleDelete(_id)} className='btn btn-danger ms-auto'>Delete</button>
                </CardActions>
            </Card>
        </Col>
    )
}

export default ManageProduct;