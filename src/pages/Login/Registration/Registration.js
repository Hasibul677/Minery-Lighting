import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { user, error, setError, isLoading, registrationWithEmail } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newResigration = { ...registrationData };
        newResigration[field] = value;
        setRegistrationData(newResigration);
    }

    const handleLoginForm = e => {
        e.preventDefault();
        if (registrationData.password !== registrationData.password2) {
            setError('Password did not match')
            return;
        }
        registrationWithEmail(registrationData.email, registrationData.password, registrationData.name, history, location)

    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Typography sx={{ textAlign: 'center', mt: 12, fontFamily: 'cursive' }} variant="h4" gutterBottom component="div">
                            Registration Here
                        </Typography>
                        {!isLoading && <form onSubmit={handleLoginForm}>
                            <TextField
                                sx={{ width: '90%' }}
                                onBlur={handleOnBlur}
                                name='name'
                                label="Name"
                                variant="standard" />
                            <TextField
                                sx={{ width: '90%' }}
                                onBlur={handleOnBlur}
                                name='email'
                                type='email'
                                label="Email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '90%' }}
                                onBlur={handleOnBlur}
                                name='password'
                                type='password'
                                label="Password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '90%' }}
                                onBlur={handleOnBlur}
                                name='password2'
                                type='password'
                                label="re-type password"
                                variant="standard" />
                            <Button sx={{ mt: 2 }} type='submit' variant="contained">Registration</Button>
                            <Typography sx={{ mt: 5, fontFamily: 'cursive' }} variant="body1" gutterBottom component="div">
                                Already Registerd? <Link style={{ textDecoration: 'none' }} to='/login'>Login Here !</Link>
                            </Typography>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user.email && <Alert severity="success">Congratulation user added successfully !</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img src="/images/login/login.jpg" alt="" />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Registration;