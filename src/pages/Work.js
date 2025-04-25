import React, { useEffect, useState } from "react";
import { m, motion } from "framer-motion";
import styled from "styled-components";
import WorkItem from "../components/sub/WorkItem";

const WorkContainer = styled.div`
  position: relative;
`;

const WorkList = styled.ul``;

const works = [
  {
    id: 1,
    name: "intech.edu.lk",
    description:
      "INTECH(Indeepa college of technology) is an institute with the vision of creating talented professionals in the area of IT/ Business & Engineering while enabling them to develop core competencies & skills towards the highly sophisticated professional carrier.",
    url: "https://www.intech.edu.lk/",
    repo: "https://github.com/KasunGunawardana/intech-backend",
    tags: ["#laravel"],
    note: "My role was to create the frontend of the website (they already had the design) & the backend dashboard (fully customized CMS) which they can use to change the content of the website. Every content you see on the website is editable.",
    video: "../assets/videos/Intech.mp4"
  },
  {
    id: 2,
    name: "jvillas-official.com",
    description:
      "James Villas is a full-time singer/songwriter/instrumentalist & audio engineer, he needed a simple website to showcase his work. He did make sure that the website should look more modern with the animations.",
    url: null,
    repo: "https://github.com/KasunGunawardana/jvillas-official.com",
    tags: ["#html, #css, #javascript"],
    note: "Villas already had the idea of the web design (a sketch) all he needed is someone who can develop the website. (through fiverr)",
    video: "../assets/videos/James_Villas.mp4"
  },
  {
    id: 3,
    name: "tpl.lk",
    description:
      "Trade Promoters Limited (TPL) is Sri Lanka & Maldives's sole authorized distributor for Cummins Inc. (diesel generators & engines for marine, construction & industrial applications), & Sri Lanka's authorized distributor for Schindler (elevators & escalators).",
    url: "https://tpl.lk//",
    repo: null,
    tags: ["#php, #wordpress_cms"],
    note: "My role was to revamp their existing website with a minimal effort while working as their IT Support Executive. So I chose WordPress to build it with the help of plugins.",
    video: "../assets/videos/tpl.mp4"
  },
  {
    id: 4,
    name: "liberty-in-learning.org",
    description:
      "The Liberty in Learning Coalition is a growing group of associations, individuals, & home education curriculum providers in South Africa who share a common goal & are working for greater freedom in education.",
    url: null,
    repo: "https://github.com/KasunGunawardana/liberty-in-learning.org",
    tags: ["#html, #css, #javascript"],
    note: "The project owner (debbie vandereem) had previously contacted me to create the association's logo (through fiverr). She already had a very basic website with the intention to just store information. She needed to make it nicer & more professional. (Sorry about the laggy content)",
    video: "../assets/videos/Liberty_in_Learning.mp4"
  },
  {
    id: 5,
    name: "liberty-in-learning.org",
    description:
      "The Liberty in Learning Coalition is a growing group of associations, individuals, & home education curriculum providers in South Africa who share a common goal & are working for greater freedom in education.",
    url: null,
    repo: "https://github.com/KasunGunawardana/liberty-in-learning.org",
    tags: ["#html, #css, #javascript"],
    note: "The project owner (debbie vandereem) had previously contacted me to create the association's logo (through fiverr). She already had a very basic website with the intention to just store information. She needed to make it nicer & more professional. (Sorry about the laggy content)",
    video: "../assets/videos/Liberty_in_Learning.mp4"
  },
  {
    id: 6,
    name: "liberty-in-learning.org",
    description:
      "The Liberty in Learning Coalition is a growing group of associations, individuals, & home education curriculum providers in South Africa who share a common goal & are working for greater freedom in education.",
    url: null,
    repo: "https://github.com/KasunGunawardana/liberty-in-learning.org",
    tags: ["#html, #css, #javascript"],
    note: "The project owner (debbie vandereem) had previously contacted me to create the association's logo (through fiverr). She already had a very basic website with the intention to just store information. She needed to make it nicer & more professional. (Sorry about the laggy content)",
    video: "../assets/videos/Liberty_in_Learning.mp4"
  }
];

const replayVideo = () => {
  var videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.currentTime = 0;
  });
};

const Video = ({ path }) => {
  return <video className="video" autoPlay src={path} muted loop />;
};

const Work = () => {
  const [tabActive, setTabActive] = useState(1);

  useEffect(() => {}, []);

  return (
    <div className="page">
      <div className="container">
        <div className="row" style={{ flexDirection: "column" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Solo Projects</h1>
            <p>
              Some <strong>Things</strong> I’ve Built...
            </p>

            {/* <WorkContainer style={{ }}>
              <WorkList>
                { works.map((work) => (
                  <WorkItem key={work.id} name={work.name} />
                ))}
              </WorkList>
            </WorkContainer> */}

            <div className="work-wrapper customized-row">
              <div className="customized-column col-md-12 col-lg-7 col-xxl-7">
                <div className="tab-content">
                  {works.map((work) => (
                    <div
                      key={work.id}
                      className={
                        tabActive === work.id ? "tab-pane active" : "tab-pane"
                      }
                    >
                      <div className="video__banner">
                        <div className="video-wrapper">
                          <Video path={work.video} />
                          <div className="work-links-wrapper">
                            {work.repo != null && (
                              <a
                                className="work-link icons"
                                title="To GitHub repo"
                                href={work.repo}
                                target="_blank"
                              >
                                <i class="fab fa-github"></i>
                              </a>
                            )}
                            {work.url != null && (
                              <a
                                className="work-link icons"
                                title="Visit the website"
                                href={work.url}
                                target="_blank"
                              >
                                <i class="fas fa-external-link-alt"></i>
                              </a>
                            )}
                          </div>
                          <div className="loader3">
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <span className="tab-pane-item__hash">{work.tags}</span>
                        <hr />
                        <span className="tab-pane-item__desc">{work.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="customized-column col-md-12 col-lg-5 col-xxl-5">
                <div className="nav-tabs">
                  {works.map((work) => (
                    <a
                      key={work.id}
                      className={
                        tabActive === work.id
                          ? "process-item active"
                          : "process-item"
                      }
                      onClick={() => {
                        setTabActive(work.id);
                        replayVideo();
                      }}
                    >
                      <div className="process-item__content">
                        <h4 className="process-item__title">{work.name}</h4>
                        <p className="process-item__desc">{work.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
