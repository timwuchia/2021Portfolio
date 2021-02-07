import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const Home = () => {
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transition}
        >
            <Header />
            <div className="home-page container page-wrapper">
                <p>A front end focused full stack developer, specializes in WordPress websites and MERN stack applications.</p>
            </div>
        </motion.div>
    )
}

export default Home
