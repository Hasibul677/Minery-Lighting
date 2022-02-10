import React from 'react';
import './Navigation.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px', fontFamily: 'cursive' }} to="/home">Minery Lighting</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink style={{ textDecoration: 'none' }} activeClassName='selected' to='/home'><Button color="inherit">Home</Button></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} activeClassName='selected' to='/lamp'><Button color="inherit">Explore Lamp</Button></NavLink>
                      
                        <NavLink style={{ textDecoration: 'none' }} activeClassName='selected' to='/contact'><Button color="inherit">Contact</Button></NavLink>

                        {user?.email ? <Box>
                            <NavLink style={{ textDecoration: 'none' }} activeClassName='selected' to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>
                            <span className='text-white mx-2 border p-1 rounded'>{user?.displayName}</span>
                            <Button onClick={logOut} className='btn btn-danger'>Logout</Button>
                        </Box> :
                            <NavLink style={{ textDecoration: 'none' }} activeClassName='selected' to='/login'><Button color="inherit">Login</Button></NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;