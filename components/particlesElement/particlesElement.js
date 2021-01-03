import React from 'react';
import Particles from 'react-tsparticles';
import { makeStyles } from '@material-ui/core/styles';
import "./particlesElement.scss";

const useStyles = makeStyles({
  particlesCanva: {
    height: "100vh !important",
    width: "auto !important",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "-1",
  },
});

const ParticlesElement = () => {
  const classes = useStyles();

  return (
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          retina_detect: true,
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 2,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          particles: {
            color: {
              value: '#fff000',
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: '#808080',
              opacity: 1,
              width: 3,
            },
            move: {
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
              enable: true,
              speed: 5,
              direction: 'none',
              random: true,
              straight: true,
              out_mode: 'out',
              bounce: true,
            },
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            shape: {
              type: 'image',
              image: [
                {
                  src: '/images/awsImg.png',
                },
                {
                  src: '/images/codeImg.png',
                },
                {
                  src: '/images/css3Img.png',
                },
                {
                  src: '/images/gitImg.png',
                },
                {
                  src: '/images/html5Img.png',
                },
                {
                  src: '/images/jsImg.png',
                },
                {
                  src: '/images/nodejsImg.png',
                },
                {
                  src: '/images/nginxImg.png',
                },
                {
                  src: '/images/photoshopImg.png',
                },
                {
                  src: '/images/reactImg.png',
                },
                {
                  src: '/images/bootstrapImg.png',
                },
                {
                  src: '/images/figmaImg.png',
                },
                {
                  src: '/images/cypressImg.png',
                },
                {
                  src: '/images/postmanImg.png',
                },
                {
                  src: '/images/mysqlImg.png',
                },
                {
                  src: '/images/nextImg.png',
                },
              ],
              polygon: {
                nb_sides: 5,
              },
            },
            size: {
              animation: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: false,
              },
              value: 30,
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.4,
                sync: false,
              },
            },
          },
        }}
      />
  );
};

export default ParticlesElement;
