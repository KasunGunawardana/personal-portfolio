import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import gsap from 'gsap'

let tl = gsap.timeline();

const Header = ({ history, dimensions }) => {

    const [menuState, setMenuState] = useState({
        menuOpened: false
    });

    const checkMenuState = () => {
        if(menuState.menuOpened === false ) {
            setMenuState({ menuOpened: true});
        } else {
            setMenuState({ menuOpened: false});
        }
    }    

    useEffect(() => {

        history.listen(() => {
            setMenuState({ menuOpened: false});
        })

        if(menuState.menuOpened === true ) {
            gsap.to("nav", {
                css: { display: "block"},
                ease: "power4.out"
            });
            gsap.to("body", { 
                css: { overflow: "hidden"},
                ease: "power4.out"
            });

            tl.to(".App", {
                duration: 1,
                y: dimensions.width >= '768' ? dimensions.height / 2 : "70vh",
                ease: "power4.out"
            })
        } else {
            tl.to(".App", {
                duration: 1,
                y: 0,
                ease: "power4.out"
            }).to("nav", {
                css: { display: "none"},
                ease: "power4.out"
            }).to("body", { 
                css: { overflow: "auto"},
                ease: "power4.out"
            })
        }
        
    },[menuState.menuOpened])

    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <NavLink to="/">Kasun Gunawardana</NavLink>
                    </div>
                    <div className={menuState.menuOpened ? 'nav-btn active' : 'nav-btn'} onClick={checkMenuState} >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(Header)
