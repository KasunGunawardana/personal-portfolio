import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import gsap from 'gsap';

// styles
import './styles/App.css';

// components
import Header from './components/Header'
import Navigation from './components/Navigation'

// pages
import Home from './pages/Home'
import Skills from './pages/Skills'
import About from './pages/About'
import Work from './pages/Work'
import NotFound from './pages/NotFound'

// variables
const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/skills', name: 'Skills', component: Skills},
  {path: '/about', name: 'About', component: About},
  {path: '/work', name: 'Work', component: Work}
]

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() =>{
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  }
}

function App() {

  gsap.to("body",  { 
    css: {visibility: 'visible'},
    durations: 0
  });

  const [dimensions, setDimentions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    const debouncedHandleResize = debounce(function handleResize() {
      setDimentions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 500);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };

  },[])

  return (
        <div>
          <Header dimensions={dimensions} />
          <div className="App">
              <Switch>
              {/* <Route path='/' exact component={Home} />
              <Route path='/skills' component={Skills} />
              <Route path='/about' component={About} /> */}
              {routes.map(({path, name, component}) => (
                <Route key={name} exact path={path} component={component} />
              ))}
              <Route component={NotFound} />
            </Switch>
          </div>
          <Navigation dimensions={dimensions} />
        </div>
  );
}

export default App;
