import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth'
import { Typography, CircularProgress, Box, Grid, CardMedia, CardContent, CardActions } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';

const UpdateProduct = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    const { name, price, description, image } = items;
    const { register, handleSubmit, setValue } = useForm();
    const { isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_path = location?.state?.form || '/dashboard/manageProduct'
    useEffect(() => {
        fetch(`https://salty-taiga-52197.herokuapp.com/allProducts/${id}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [id])

    setValue('name', `${name}`);
    setValue('price', `${price}`);
    setValue('description', `${description}`);
    setValue('image', `${image}`);


    const onSubmit = data => {
        axios.put(`https://salty-taiga-52197.herokuapp.com/allProducts/${id}`, data)
            .then(res => {
                swal("Good job!", "Update Successfully!", "success");
                history.push(redirect_path)
            })
    };
    return (
        <div className='background' style={{ backgroundImage: `url("https://media.istockphoto.com/photos/close-up-of-a-black-slate-texture-background-stone-grunge-texture-picture-id1268759368?b=1&k=20&m=1268759368&s=170667a&w=0&h=DIY4qKF5cJYL4uO8C2OoxUMWaw34_j_TPhT7tZXKw5U=")`, minHeight: '660px' }}>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={8}>
                            <Typography sx={{ textAlign: 'center', mt: 12, fontFamily: 'cursive', color: 'white' }} variant="h4" gutterBottom component="div">
                                Update Your Product
                            </Typography>
                            <div className='form-design py-5 mx-5'>
                                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name")} />
                                    <input {...register("price")} />
                                    <textarea {...register("description")} />
                                    <input {...register("image")} />
                                    <input className='btn-outline-success' type="submit" value='Update' />
                                </form>}
                                {isLoading && <CircularProgress />}
                            </div>
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

export default UpdateProduct;