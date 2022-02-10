import React, { useEffect, useState } from 'react';
import './CustomerReview.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://salty-taiga-52197.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='my-5 py-5' style={{fontFamily:'cursive'}}>
            <Container>
                <div>
                    <h1>Customer Reviews</h1>
                    <hr style={{border:'2px solid blue'}}/>
                </div>
                <Row>
                    {
                        reviews.map(review => <ReviewData key={review._id} review={review}></ReviewData>)
                    }
                </Row>
            </Container>
        </div>
    );
};

function ReviewData({ review }) {
    const { name, comment, image, ratting } = review;
    return (
        <Col xm={12} md={6} lg={4}>
            <Card className='py-3 parent'>
                <div>
                    <Card.Img className='review-image' src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJldmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <Card.Body>
                <Card.Text className='text-center'>
                    <img className='profile rounded-circle' src={image} alt="" />
                </Card.Text>
                <Card.Text className='mt-2 px-2'>
                    <h5>{name}</h5>
                    <small>{comment}</small><br /><br />
                    <span>{[...Array(parseInt(ratting)).keys()].map((index) => {
                        return <StarIcon key={index} />
                    })}({ratting})</span>
                </Card.Text>
               </Card.Body>
            </Card>
        </Col>
    )
}

export default CustomerReview;