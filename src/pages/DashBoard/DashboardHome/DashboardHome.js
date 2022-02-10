import React from 'react';
import './DashboardHome.css';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user, admin } = useAuth();
    return (
        <div>
            {admin && <h3 className='title' style={{ fontFamily: 'cursive' }}>Welcome {user.displayName} on <span className='text-danger'>Admin Panel</span></h3>}
            {!admin && <h3 className='title' style={{ fontFamily: 'cursive' }}>Welcome {user.displayName} on <span className='text-success'>User Panel</span></h3>}
            {admin && <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80")`, height: '500px' }}>
            </div>}
            {!admin && <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80")`, height: '500px'}}>
            </div>}
        </div>
    );
};

export default DashboardHome;