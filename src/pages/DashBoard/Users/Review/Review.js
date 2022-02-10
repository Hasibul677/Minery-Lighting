import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Typography, CircularProgress, Box, Grid } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Review = () => {
    const { isLoading, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_path = location?.state?.form || '/dashboard'

    const { register, handleSubmit, setValue } = useForm();

    setValue("name", `${user.displayName}`)
    setValue("email", `${user.email}`)
    setValue("image", `${user.photoUrl ? user.photoUrl : "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnRvb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}`)

    const onSubmit = data => {
        axios.post(`https://salty-taiga-52197.herokuapp.com/reviews`, data)
        .then(res=>{
            swal("Thank You!", "For Your Review!", "success");
            history.push(redirect_path)
        })
    }
    return (
        <div className='background' style={{backgroundImage:`url("https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`, minHeight:'550px'}}>
            <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} lg={3}></Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography sx={{ textAlign: 'center', fontFamily: 'cursive', paddingTop:'80px' }} variant="h4" gutterBottom component="div">
                            Your Review !!
                        </Typography>
                        <div className='form-design'>
                            {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='form-control' required {...register("name")} disabled/>
                                <input className='form-control' required {...register("email")} disabled/>
                                <input className='d-none' {...register("image")}/>
                                <textarea className='form-control' required {...register("comment")} placeholder='Review'/>
                                <input className='form-control' required type='number' {...register("ratting", { min: 1, max: 5 })} placeholder='Number between 1-5' />
                                <input className='form-control btn-outline-danger' type="submit" value='Send Your Review' />
                            </form>}
                            {isLoading && <CircularProgress />}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </div>
    );
};

export default Review;