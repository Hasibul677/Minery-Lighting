import { TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const{error, token}= useAuth();


    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const user = { email }
        fetch('https://salty-taiga-52197.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
                ;
            })
    }
    return (
        <div className='background' style={{backgroundImage:`url("https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`, minHeight:'500px', color:'white'}}>
            <h1 className='text-white text-center pt-5' style={{fontFamily:'cursive'}}>Make An Admin</h1>
            <div className='text-center card mx-5 py-4'>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    sx={{ width: '50%'}}
                    onBlur={handleOnBlur}
                    type='email'
                    label="Email"
                    variant="standard" />
                <button className='ms-3 mt-3 btn-outline-success rounded' type='submit'>Make Adimn</button>
            </form>
            </div>
            {success && <Alert severity="success">Made Admin successfully !</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
        </div>
    );
};

export default MakeAdmin;