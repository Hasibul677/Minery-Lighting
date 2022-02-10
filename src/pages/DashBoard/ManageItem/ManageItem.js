import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageItem = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://salty-taiga-52197.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, []);
    const deleteOrder = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://salty-taiga-52197.herokuapp.com/manageOrder/${id}`)
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

    const updateStatus = id => {
        axios.put(`https://salty-taiga-52197.herokuapp.com/manageOrder/${id}`)
        const findItem = orders.find(order => order._id === id);
        if (findItem) {
            findItem.status = 'shipped'
            const remaingData = orders.filter(order => order._id !== id)
            setOrders([...remaingData, findItem])
        }
    }

    return (
        <div className='background' style={{backgroundImage:`url("https://media.istockphoto.com/photos/close-up-of-a-black-slate-texture-background-stone-grunge-texture-picture-id1268759368?b=1&k=20&m=1268759368&s=170667a&w=0&h=DIY4qKF5cJYL4uO8C2OoxUMWaw34_j_TPhT7tZXKw5U=")`, minHeight:'500px'}}>
            <Container>
            <Row>
                <Col xm={12} md={12} lg={12}>
                    <Row style={{ fontFamily: 'cursive', fontWeight: 700, fontSize: '20px', textAlign: 'center', color:'white' }} className='mb-3'>
                        <Col xm={12} lg={2}>
                            Name
                        </Col>
                        <Col xm={12} lg={2}>
                            Product Name
                        </Col>
                        <Col xm={12} lg={1}>
                            Price
                        </Col>
                        <Col xm={12} lg={2}>
                            Phone
                        </Col>
                        <Col xm={12} lg={1}>
                            Status
                        </Col>
                        <Col xm={12} lg={3}>
                            Action
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ fontFamily: 'cursive', textAlign: 'center', color: 'green' }} className='gy-2'>
                {
                    orders.map(order => <Display
                        key={order._id}
                        order={order}
                        deleteOrder={deleteOrder}
                        updateStatus={updateStatus}></Display>)
                }
            </Row>
        </Container>
        </div>
    );
};

function Display({ order, deleteOrder, updateStatus }) {
    const { _id, name, price, productName, phone, status } = order;
    return (
        <Col xm={12} md={12} lg={12}>
            <Card>
                <Row>
                    <Col xm={12} lg={2}>
                        {name}
                    </Col>
                    <Col xm={12} lg={2}>
                        {productName.slice(0, 19)}
                    </Col>
                    <Col xm={12} lg={1}>
                        {price}
                    </Col>
                    <Col xm={12} lg={2}>
                        {phone}
                    </Col>
                    <Col xm={12} lg={1}>
                        {status}
                    </Col>
                    <Col xm={12} lg={3}>
                        <button onClick={() => updateStatus(_id)} className='btn-success'>shipped</button>
                        <button onClick={() => deleteOrder(_id)} className='btn-danger'>rejected</button>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default ManageItem;