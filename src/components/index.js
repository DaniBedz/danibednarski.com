import React from 'react';
import Navbar from './navbar';
import Header from './header';
import Particles from "react-tsparticles";
import { makeStyles } from '@material-ui/core/styles';
import reactImg from '../reactImg.svg';
import codeImg from '../codeImg.svg';
import css3Img from '../css3Img.svg';
import html5Img from '../html5Img.svg';
import jsImg from '../jsImg.svg';
import nodejsImg from '../nodejsImg.svg';
import gitImg from '../gitImg.svg';
import nginxImg from '../nginxImg.svg';
import photoshopImg from '../photoshopImg.svg';
import awsImg from '../awsImg.svg';

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
})

const Home = () => {

  const classes = useStyles()

  return (
    <div>
      <Navbar />
      <Particles
        canvasClassName={classes.particlesCanva}
        options = {{
        fpsLimit: 60,
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
          },
          shape: {
            type: ["image"],
            stroke: {
              width: 0,
              color: "#fff"
            },
            polygon: {
              nb_sides: 5
            },
            image: [{
                    "src": `${codeImg}`
                  },
                  {
                    "src": `${reactImg}`
                  },
                  {
                    "src": `${nodejsImg}`
                  },
                  {
                    "src": `${jsImg}`
                  },
                  {
                    "src": `${css3Img}`
                  },
                  {
                    "src": `${html5Img}`
                  },
                  {
                    "src": `${nginxImg}`
                  },
                  {
                    "src": `${photoshopImg}`
                  },
                  {
                    "src": `${awsImg}`,
                    height: 40,
                    width: 80
                  },
                  {
                    "src": `${gitImg}`
                  }]
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 20,
            random: false,
            anim: {
              enable: false,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 1,
            width: 2
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 2
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}

      />
      <Header />
    </div>
  )
}

export default Home