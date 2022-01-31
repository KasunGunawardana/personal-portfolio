import React from 'react'
import { ReactComponent as ProfilePic } from '../assets/profile.svg'
import { motion } from 'framer-motion'

const About = () => {
	return (
	<div className='page with-scroll'>
      <div className='container'>
        <div className='row'>
          <motion.div
          initial={{ opacity:0 }} 
          animate={{ opacity:1 }} 
          transition={{ duration: 1 }} 
          style={{ width: '100%' }}>
            <div style={{ textAlign: 'center' }}>
              <ProfilePic />
              <h1>Want to learn a little about me?</h1>
            </div>
            <div>
            <p>I'm Kasun Gunawardana. I enjoy learning new skills and creating things that live on the internet. My interest in web development started back in 2017 while I was working for a company called Trade Promoters as an ERP administrator. They had a requerement for a small system to schedule/assign their technicians for each jobs and keep track on them. They also needed to revamp their existing outdated website. Since I come with an IT background, I knew some stuff related to web development. So I had to do those stuff while troubleshooting and resolving their ERP related problems. My knowledge of Web Development gradually increased ....</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
	)
}

export default About
