import React from 'react';
import Header from '../components/Header';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Blog from '../assets/img/blog.png';
import Todolist from '../assets/img/todolist.png';
import {motion} from 'framer-motion';
import {animationTwo, transition} from '../animations'


// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Works = () => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition}>
            <Header />
            <div className="page-wrapper container work-page">
                <div>
                    <Swiper 
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide><img src={Blog} /></SwiperSlide>
                        <SwiperSlide><img src={Todolist} /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </motion.div>
    )
}

export default Works
