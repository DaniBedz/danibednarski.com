import React from 'react';
import Navbar from './navbar';
import Header from './header';
import Particles from "react-tsparticles";
import { makeStyles } from '@material-ui/core/styles';
import reactImg from '../reactImg.png';
import codeImg from '../codeImg.png';
import css3Img from '../css3Img.png';
import html5Img from '../html5Img.png';
import jsImg from '../jsImg.png';
import nodejsImg from '../nodejsImg.png';
import gitImg from '../gitImg.png';
import nginxImg from '../nginxImg.png';
import photoshopImg from '../photoshopImg.png';
import awsImg from '../awsImg.png';

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
})

const Home = () => {

  const classes = useStyles();
    return (
      <div>
        <Navbar />
        <Header />
        <Particles
          canvasClassName={classes.particlesCanva}
          params={{
            retina_detect: true,
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "grab"
                },
                onClick: {
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
            particles: {
              color: {
                value: "#fff000",
              },
              line_linked: {
                enable: true,
                distance: 200,
                color: "#808080",
                opacity: 1,
                width: 3
              },
              move: {
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                },
                enable: true,
                speed: 5,
                direction: "none",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: true
              },
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              shape: {
                type: [
                  "image"
                ],
                  image: [
                    {
                      src: `${codeImg}`
                    },
                    {
                      src: `${reactImg}`
                    },
                    {
                      src: `${nodejsImg}`
                    },
                    {
                      src: `${jsImg}`
                    },
                    {
                      src: `${css3Img}`,
                    },
                    {
                      src: `${html5Img}`
                    },
                    {
                      src: `${nginxImg}`
                    },
                    {
                      src: `${photoshopImg}`
                    },
                    {
                      src: `${awsImg}`,
                      width: 120,
                      height: 80
                    },
                    {
                      src: `${gitImg}`
                    }
                  ],
                polygon: {
                  nb_sides: 5
                }
              },
              size: {
                animation: {
                  enable: true,
                  speed: 10,
                  size_min: 40,
                  sync: false,
                  // minimumValue: 0.1
                },
                // random: true,
                value: 30
              },
              opacity: {
                value: 1,
                random: false,
                animation: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.4,
                  sync: false
                }
              }
            }
          }}

        />
      </div>
    )
}

export default Home