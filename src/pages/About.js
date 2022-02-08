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
            <p className='about'>I'm Kasun Gunawardana. I enjoy learning new skills and creating things that live on the internet. My interest in web development started back in 2017 while I was working for a company called Trade Promoters as an ERP administrator (IT Support Executive -&gt; ERP Administrator). At that time they had a requirement for a small system to schedule/assign their technicians for each job and keep track of them. They also needed to revamp their existing outdated website. Since I come with an IT background (My brother is a lead UI/UX Engineer, so he always guides me), I knew some stuff related to web development. So I had to do those stuff while troubleshooting and resolving their ERP related problems. I also got the opportunity to learn the network stuff but it didn't feel like the right path. However my knowledge of Web Development gradually increased. I learned a lot of new stuff and techs related to web dev by watching online tutorials.</p>
            <p className='about'>So I joined JP Web Solutions in 2019 and started my career as a web developer. First I was assigned to convert cheerful web designs (PSD, XD) to HTML/CSS (using uikit, bootstrap, materialize css) and add their CMS. After that they offered me trainings in Zend, Laravel php frameworks and then I was assigned to do further CMS developments/customizations like adding extra features/modules. Content coming soon...</p>
            <div className="white-space-xl" style={{ height: '80px' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
	)
}

export default About
