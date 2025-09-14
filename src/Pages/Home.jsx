import React from 'react';
import Hero from '../Components/Hero';
import LatestCollection from '../Components/LatestCollection';
import BestSeller from '../Components/BestSeller';
import OurPolicy from '../Components/OurPolicy';
import NewsLetterBox from '../Components/NewsLetterBox';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <LatestCollection></LatestCollection>
            <BestSeller></BestSeller>
            <OurPolicy></OurPolicy>
            <NewsLetterBox></NewsLetterBox>
        </div>
    );
};

export default Home;