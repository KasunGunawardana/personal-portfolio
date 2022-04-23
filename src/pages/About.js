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
              <h1>Want to know a little about me?</h1>
            </div>
            <div>
            {/* <p className='about'>I'm Kasun Gunawardana (25). I enjoy creating things that live on the internet. My interest in web development started back in 2017 while I was working for a company called Trade Promoters as an ERP administrator (IT Support Executive -&gt; ERP Administrator). At that time they had a requirement for a small system to schedule/assign their technicians for each job and keep track of them. They also needed to revamp their existing outdated website. Since I come with an IT background (My brother is a lead UI/UX Engineer, so he always guides me), I knew some stuff related to web development. So I had to do those stuff while troubleshooting and resolving their ERP related problems. I also got the opportunity to learn the hardware/networking stuff but it didn't feel like the right path. However my knowledge in Web Development gradually increased. I learned a lot of new stuff and techs related to web dev by watching online tutorials. My work there was not consistent (sometimes I had to fix their computer hardware/network related issues, ERP system related issues...). I felt like I was not in the right path. So I decided to quit.</p>
            <p className='about'>I joined JP Web Solutions in 2019 and started my career as a web developer. Ever since I joined them, I've been converting cheerful web designs (PSD, XD) to HTML/CSS/Javascript (using uikit, bootstrap, materialize-css), developing/customizing their CMS, adding extra features/modules to the CMS (based on customer requirements) and developing Bespoke CMSs, Forums from scratch [using <strong>Laravel (mostly)</strong> and Zend php frameworks]. I was also able to gain some SEO knowledge as well. The only downside I had was not being able to get much experience with a frontend js framework.</p>
            <p className='about'>So I'm now focusing on getting experience with a frontend js framework like React (Since I've been working with React for a while under my brother's guidance) and it's my goal to eventually become a full-stack developer.</p> */}
            <p className='about'>I'm Kasun Gunawardana (25). I enjoy creating things that live on the internet. My interest in web development started back in 2017 while I was working for a company called Trade Promoters as an ERP administrator (IT Support Executive -&gt; ERP Administrator). At that time they had a requirement for a small system to schedule/assign their technicians for each job and keep track of them. They also needed to revamp their existing outdated website. Since I come with an IT background (My brother is a lead UI/UX Engineer, so he always guides me), I knew some stuff related to web development. So I had to do those stuff while troubleshooting and resolving their ERP related problems. I also got the opportunity to learn the hardware/networking stuff but it didn't feel like the right path. However my knowledge in Web Development gradually increased. I learned a lot of new stuff and techs related to web dev by watching online tutorials. My work there was not consistent. I felt like I was not in the right path. So I decided to quit.</p>
            <p className='about'>I joined JP Web Solutions in 2019 and started my career as a web developer. Ever since I joined them, I've been converting cheerful web designs (PSD, XD) to HTML/CSS/Javascript (React) [using uikit, bootstrap, materialize-css], developing/customizing their CMS, adding extra features/modules to the CMS (based on customer requirements) and developing Bespoke CMSs, Forums from scratch [using <strong>Laravel </strong> and Zend (mostly) php frameworks]. I was also able to gain some SEO knowledge as well.</p>
            <p className='about'>So I'm now focusing on getting more experience with a frontend js framework like React and it's my goal to eventually become a full-stack developer.</p>
            {/* <div className="white-space-xl" style={{ height: '80px' }}></div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
	)
}

export default About
