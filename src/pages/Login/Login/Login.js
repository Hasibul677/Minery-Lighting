import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, error, isLoading, loginWithEmail, googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newResigration = { ...loginData };
        newResigration[field] = value;
        setLoginData(newResigration);
    }

    const handleLoginForm = e => {
        e.preventDefault();
        loginWithEmail(loginData.email, loginData.password, location, history);
    }

    const handleGoogleSignIn=()=>{
        googleSignIn(history, location)
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Typography sx={{ textAlign: 'center', mt: 12 }} variant="h4" gutterBottom component="div">
                            Login Form
                        </Typography>
                        <Typography sx={{ textAlign: 'center', mt: 5 }} variant="h4" gutterBottom component="div">
                        <button onClick={handleGoogleSignIn} className='btn btn-outline-primary m-auto'><GoogleIcon/></button>
                        </Typography>
                        

                        {!isLoading && <form onSubmit={handleLoginForm}>
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
                            <Button sx={{ mt: 2 }} type='submit' variant="contained">Login</Button>
                            <Typography sx={{ mt: 5, fontFamily: 'cursive' }} variant="body1" gutterBottom component="div">
                                Are You New? <Link style={{ textDecoration: 'none' }} to='/registration'>Registration Here !</Link>
                            </Typography>
                        </form>}

                        {isLoading && <CircularProgress />}
                        {user.email && <Alert severity="success">Login successfully !</Alert>}
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

export default Login;