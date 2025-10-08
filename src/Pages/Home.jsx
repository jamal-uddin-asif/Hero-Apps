import React from 'react';
import Banner from '../Components/Banner';
import SecondBanner from '../Components/SecondBanner';
import TrendingApps from '../Components/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <TrendingApps></TrendingApps>
      
        </div>
    );
};

export default Home;