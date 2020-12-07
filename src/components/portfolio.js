import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  // Button,
  Typography,
} from '@material-ui/core';
import Navbar from './navbar';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
// import project3 from '../images/project3.png';

const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
    fontFamily: 'Rubik',
  },
  cardContainer: {
    maxWidth: 500,
    margin: '5rem auto',
    borderRadius: '15px',
    fontFamily: 'Rubik',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Rubik',
  },
  rubik: {
    fontFamily: 'Rubik',
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="bedz.me - A simple link shortener service"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" className={classes.title}>
                  <a href="https://bedz.me/">bedz.me</a>
                  <br />A Simple Link Shortener Service
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.rubik}
                >
                  I decided to make a link shortener service as I have always
                  wondered how they worked and owned a short domain from a
                  previous project.
                  <br />
                  <br />
                  This was a great learning experience as I got the chance to
                  manage my own virtual webserver, work directly with a MySQL
                  database, as well as make something that I use almost
                  everyday.
                  <br />
                  <br />
                  <b>Technologies used:</b>
                  <ul>
                    <li>
                      Hosting: AWS (EC2, Route53, CloudFront, Certificate
                      Manager)
                    </li>
                    <li>Webserver: nginx on Ubuntu 20.04</li>
                    <li>
                      <a href="https://yourls.org/">YOURLS</a>: Open source URL
                      redirection framework (PHP)
                    </li>
                    <li>
                      Database: <a href="https://mariadb.org/">MariaDB</a>{' '}
                      (MySQL)
                    </li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <button
                  type="button"
                  className={classes.rubik}
                  size="small"
                  color="primary"
                >
                  GitHub
                </button>
                <button
                  type="button"
                  className={classes.rubik}
                  size="small"
                  color="primary"
                >
                  Live Demo
                </button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="xrat.es - Currency Converter"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" className={classes.title}>
                  <a href="https://xrat.es/">xrat.es</a>
                  <br />A Simple Currency Converter
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.rubik}
                >
                  I wanted to create a simple, but useful React App that used an
                  external API.
                  <br />
                  <br />
                  A currency converter was a good first React project as it gave
                  me exposure to components, state, and React hooks.
                  <br />
                  <br />
                  I also set up CI with Buddy as an additional challenge, which
                  really helped improve the workflow.
                  <br />
                  <br />
                  <b>Technologies used:</b>
                  <ul>
                    <li>
                      Hosting: AWS (S3, Route53, CloudFront, Certificate
                      Manager)
                    </li>
                    <li>Front-End: React</li>
                    <li>
                      CI: <a href="https://buddy.works/">Buddy</a>
                    </li>
                    <li>
                      API:{' '}
                      <a href="https://api.exchangeratesapi.io/">
                        https://api.exchangeratesapi.io/
                      </a>
                    </li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <button
                  type="button"
                  className={classes.rubik}
                  size="small"
                  color="primary"
                >
                  GitHub
                </button>
                <button
                  type="button"
                  className={classes.rubik}
                  size="small"
                  color="primary"
                >
                  Live Demo
                </button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
