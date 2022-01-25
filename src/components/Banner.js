import React from 'react';
import { ReactComponent as DownArrow } from '../assets/arrow-down.svg';

const Banner = () => {
    return (
      <section className="main">
          <div className="container">
              <div className="row">
                <h2>
                  <div className="line">
                    <span>Hi, my name is</span>
                  </div>
                  <div className="line">
                    <span>Kasun Gunawardana.</span>
                  </div>
                  <div className="line sub">
                    <span>I am a Front End Developer with a bit of backend experience.</span>
                  </div>
                </h2>
                <div className="btn-row">
                  <a href="/">Download CV <DownArrow /></a>
                </div>
                <div className="profile">
                  
                </div>
              </div>
          </div>
      </section>  
    )
}

export default Banner
