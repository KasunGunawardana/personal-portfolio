import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";
import gsap from "gsap";
import Work from "../pages/Work";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from("body", {
    css: {
      overflow: "hidden"
    }
  });
  tl.from(".line span", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .from(".header", {
      marginTop: "-70px"
    })
    .to(".intro-overlay .overlay-top", {
      height: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
      stagger: 0.4
    })
    .to(".intro-overlay", {
      css: { display: "none" },
      duration: 0,
      onComplete: completeAnimation
    })
    .to(".header", {
      marginTop: "0",
      css: {
        transitionDelay: "0.5s"
      }
    });
  tl.to("body", {
    css: {
      overflow: "auto"
    }
  });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />

      <Work />
      {/* <Cases /> */}
    </>
  );
};

export default Home;
