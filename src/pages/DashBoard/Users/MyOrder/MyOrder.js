import React, { useEffect, useState } from 'react';
import './MyOrder.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import swal from 'sweetalert';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://salty-taiga-52197.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                const reamingData = data?.filter(order => order.email === user.email);
                setOrders(reamingData);

            })
    }, [user.email]);

    const deleteOrder = (id, uid) => {


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://salty-taiga-52197.herokuapp.com/orders/${id}/${uid}`)
                        .then(res => {
                            const reamingOrder = orders.filter(order => order._id !== id)
                            setOrders(reamingOrder)
                        })
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }


    return (
        <div className='background' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`, minHeight:'600px' }}>
            <Container>
                <div style={{ fontFamily: 'cursive', fontWeight: 700 }}>
                    <h3 className='text-center text-white'>Check delivery status of your orders at any time</h3>
                </div>
                <Row className='g-4 py-5'>
                    {
                        orders.map(order => <OwnOrder key={order._id} order={order} deleteOrder={deleteOrder} uid={user.uid}></OwnOrder>)
                    }
                </Row>
            </Container>
        </div>
    );
};

function OwnOrder({ order, deleteOrder, uid }) {
    const { _id, name, productName, price, status, image } = order;
    return (
        <Col xm={12} lg={6}>
            <Card>
                <Row>
                    <Col xm={6} lg={8}>
                        <img className='orderImage img-fluid' src={image} alt="" />
                    </Col>
                    <Col xm={6} lg={4}>
                        <div>
                            <h5 style={{ fontFamily: 'cursive', fontWeight: 600 }}>{name}</h5>
                            <h6 style={{ fontFamily: 'cursive', fontWeight: 600 }}>{productName}</h6>
                            <strong style={{ fontFamily: 'cursive', fontWeight: 600 }}>Price: ${price}</strong>
                            <p style={{ fontFamily: 'cursive', fontWeight: 600 }}>{status}</p>
                            <button onClick={() => deleteOrder(_id, uid)} className='btn-danger rounded'>cancel</button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default MyOrder;