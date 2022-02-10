import React from 'react';
import './Hero.css'
import { Carousel } from 'react-bootstrap';

const Hero = () => {
    return (
        <div>
            <Carousel className='position-relative'>
                <Carousel.Item>
                    <img
                        className="images w-100"
                        src="/images/hero/1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="images w-100"
                        src="/images/hero/2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="images w-100"
                        src="/images/hero/3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;