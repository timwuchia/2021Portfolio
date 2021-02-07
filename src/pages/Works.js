import React from 'react';
import Header from '../components/Header';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Blog from '../assets/img/blog.png';
import Todolist from '../assets/img/todolist.png';
import {motion} from 'framer-motion';
import {animationTwo, transition} from '../animations';
import Slider from "react-slick";


// // Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// // import 'swiper/components/pagination/pagination.scss';
// // import 'swiper/components/scrollbar/scrollbar.scss';

// // install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Works = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition}>
            <Header />
            <div className="page-wrapper container work-page">
                <div className="card-wrapper">
                    <div className="card">
                        <h3>Blog App</h3>
                        <p>An application built with NodeJS, ReactJS, MongoDB, ExpressJS intergrating JSON Web Token for user authentication. Project would be updated overtime</p>
                        <a target="_blank" href="https://mern-blog-application.herokuapp.com/">View Website</a>
                    </div>
                    <div className="card">
                        <h3>To Do List</h3>
                        <p>An application built with React storing to do lists in localstorage. User can have the ability to add, edit and delete the list</p>
                        <a target="_blank" href="https://infallible-leakey-7a37ce.netlify.app/">View Website</a>
                    </div>
                    <div className="card">
                        <h3>English Chinese Dictionary</h3>
                        <p>An application currently in progress using NodeJS, NextJS, MongoDB, ExpressJS. Application would be intergrated with JSON Web Token and Google OAuth.</p>
                        <span>Coming soon</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Works
