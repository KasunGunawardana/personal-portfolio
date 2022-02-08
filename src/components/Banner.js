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
                    <span>I am a Frontend Developer with some knowledge in Backend technologies.</span>
                  </div>
                </h2>
                <div className="btn-row">
                  <a href="/resume-kasun_gunawardana.pdf" target="_blank">Download CV <DownArrow /></a>
                </div>
                <div className="profile">
                  
                </div>
                <br />
                <br />
                <div id="footerInfo">
                  <div className="customized-row">
                    <div className="customized-column col-lg-4 col-sm-12 col-xs-12">
                      <h4>Ongoing Projects (Solo):</h4>
                      <p>areducations.lk &nbsp;<span>// &nbsp;(React-Laravel)</span></p>
                      <p>best4x4.com.au &nbsp;<span>// &nbsp;(React-Laravel)</span></p>
                    </div>
                    <div className="customized-column col-lg-4 col-sm-12 col-xs-12">
                      <h4>Currently At:</h4>
                      <p>JP Web Solutions Limited &nbsp;<span>// &nbsp;Since 2019</span></p>
                    </div>
                    <div className="customized-column col-lg-4 col-sm-12 col-xs-12">
                      <h4>Links:</h4>
                      <ul>
                        <li><a className="icons" href="https://www.linkedin.com/in/kasun-gunawardana/" target='_blank'><i class="fab fa-linkedin"></i></a></li>
                        <li><a className="icons" href="https://twitter.com/KasunGunawarda8" target='_blank'><i class="fab fa-twitter-square"></i></a></li>
                        <li><a className="icons" href="https://github.com/KasunGunawardana" target='_blank'><i class="fab fa-github"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </section>  
    )
}

export default Banner
