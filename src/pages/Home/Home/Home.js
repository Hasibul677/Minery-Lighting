import React from 'react';
import Footer from '../../../shared/Footer/Footer';
import Navigation from '../../../shared/Navigation/Navigation';
import BestSeller from '../BestSeller/BestSeller';
import Blog from '../Blog/Blog';
import CustomerReview from '../CustomerReview/CustomerReview';
import Hero from '../Hero/Hero';
import Indor from '../Indor/Indor';
import Products from '../Products/Products';
import Update from '../Update/Update';
import Use from '../Use/Use';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Hero></Hero>
            <Products></Products>
            <Use></Use>
            <Indor></Indor>
            <BestSeller></BestSeller>
            <Update></Update>
            <Blog></Blog>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </>
    );
};

export default Home;