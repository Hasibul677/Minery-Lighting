import React, { useEffect, useState } from 'react';
import './Booking.css'
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import { Container, Typography, CircularProgress, Box, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';

const Booking = () => {
    const [findData, setFindData] = useState({});
    const { name, price, image, description } = findData;
    const location = useLocation();
    const history = useHistory();
    const { user, isLoading } = useAuth();
    const { register, handleSubmit, setValue } = useForm();
    const destination = location?.state?.from || '/';
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://salty-taiga-52197.herokuapp.com/allProducts/${id}`)
            .then(res => res.json())
            .then(data => {
                setFindData(data);
            })
    }, [id])


    setValue('name', `${user.displayName}`);
    setValue('email', `${user.email}`);
    setValue('uid', `${user.uid}`);
    setValue('productName', `${name}`);
    setValue('price', `${price}`);
    setValue('image', `${image}`);

    const onSubmit = data => {
        axios.post(`https://salty-taiga-52197.herokuapp.com/orders`, data)
            .then(res => {
                swal({
                    title: "Good job!",
                    text: `You adding ${name}`,
                    icon: "success",
                    button: "Aww yiss!",
                });
                history.push(destination);
            })
    }

    return (
        <div className='background' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`, minHeight: '600px' }}>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={8}>
                            <Card className='bg-dark py-4 mt-5 ps-5'>
                                <Typography sx={{ textAlign: 'center', fontFamily: 'cursive', color:'white' }} variant="h4" gutterBottom component="div">
                                    Confirm Your Order
                                </Typography>
                                <div className='form-design'>
                                    {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                                        <input {...register("name")} disabled />
                                        <input {...register("email")} disabled />
                                        <input {...register("productName")} disabled />
                                        <input {...register("price")} disabled />
                                        <input required {...register("address")} placeholder='Address' />
                                        <input required type='number' {...register("phone")} placeholder='Phone' />
                                        <input className='d-none' {...register("status")} value='panding' />
                                        <input className='d-none' {...register("uid")} />
                                        <input className='d-none' {...register("image")} />
                                        <input type="submit" />
                                    </form>}
                                    {isLoading && <CircularProgress />}
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                        <Card className='my-5' sx={{ maxWidth: 345 }}>
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
                               
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Booking;