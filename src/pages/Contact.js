import React from 'react';
import Header from '../components/Header';
import {motion} from 'framer-motion';
import {animationThree, transition} from '../animations'

const Contact = () => {
    return (
        <motion.div initial="out" animate="end" exit="out" variants={animationThree} transition={transition}>
        <Header />
        <div className="page-wrapper container contact-page">
            <p>Contact Me</p>
            <p className="p-sm"><a href="mailto: timwudev@gmail.com">timwudev@gmail.com</a></p>
            <p className="p-sm"><a href="https://github.com/timwuchia">github</a></p>
        </div>
        </motion.div>
    )
}

export default Contact
