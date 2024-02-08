import AboutMe from '@/components/AboutMe/AboutMe';
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Me from '@/components/Me/Me';
import Projects from '@/components/Projects/Projects';
import Technologies from '@/components/Technologies/Technologies';
import React from 'react';

const Home = () => {
    return (
        <div className='h-screen'>
            <Header/>
            <Me/>
            <AboutMe/>
            <Technologies/>
            <Projects/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;