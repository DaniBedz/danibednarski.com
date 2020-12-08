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
  Badge,
  // Button,
  Typography,
} from '@material-ui/core';
import Navbar from './navbar';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import githubImg from '../images/github.png';
import liveImg from '../images/live.png';

const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
    fontFamily: 'Rubik',
    cursor: 'default',
  },
  cardContainer: {
    maxWidth: 600,
    margin: '5rem 5vw 0rem 5vw',
    borderRadius: '15px',
    fontFamily: 'Rubik',
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid #034694',
    alignContent: 'space-between',
  },
  bottomCard: {
    marginBottom: '5rem',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Rubik',
    color: 'white',
    backgroundColor: 'black',
  },
  rubik: {
    fontFamily: 'Rubik',
    color: 'white',
    backgroundColor: 'black',
  },
  buttonContainer: {
    textAlign: 'center',
    padding: '0 4rem 0 4rem',
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '15px',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Rubik',
    color: 'white',
    backgroundColor: 'black',
    fontSize: '1.15rem',
    borderRadius: '15px',
    paddingBottom: '12px',
    cursor: 'pointer',
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={10} md={5}>
          <Card className={classes.cardContainer}>
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
                database, as well as make something that I use almost everyday.
                <br />
                <br />
                <b>Technologies used:</b>
                <br />
                <Badge>YOURLS</Badge> <Badge> nginx</Badge>{' '}
                <Badge>Ubuntu 20.04</Badge> <Badge> PHP</Badge>{' '}
                <Badge>AWS</Badge> <Badge>EC2</Badge> <Badge>Route53</Badge>{' '}
                <Badge>CloudFront</Badge> <Badge>Certificate Manager</Badge>
                <Badge>MySQL</Badge>
              </Typography>
            </CardContent>

            <CardActions className={classes.buttonContainer}>
              <div>
                <a
                  href="https://github.com/DaniBedz/bedz.me/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={classes.button}>
                    View Code{' '}
                    <img
                      src={githubImg}
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '3px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div>
                <a href="https://bedz.me" target="_blank" rel="noreferrer">
                  <button type="button" className={classes.button}>
                    Live Demo{' '}
                    <img
                      src={liveImg}
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '3px',
                      }}
                    />
                  </button>
                </a>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={10} md={5}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="xrat.es - Currency Converter"
              image={project2}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://xrat.es/">xrat.es</a>
                <br />
                Currency Converter Web App
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
                <br />
                <Badge>React</Badge> <Badge> Buddy CI</Badge>{' '}
                <Badge> API</Badge> <Badge>AWS</Badge> <Badge>S3</Badge>{' '}
                <Badge>Route53</Badge> <Badge>CloudFront</Badge>{' '}
                <Badge>Certificate Manager</Badge>
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
              <div>
                <a
                  href="https://github.com/DaniBedz/xrat.es"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={classes.button}>
                    View Code{' '}
                    <img
                      src={githubImg}
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '3px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div>
                <a href="https://xrat.es" target="_blank" rel="noreferrer">
                  <button type="button" className={classes.button}>
                    Live Demo{' '}
                    <img
                      src={liveImg}
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '3px',
                      }}
                    />
                  </button>
                </a>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={10} md={5}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Twenty One - Card Game"
              image={project3}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://bedz.me/21">Twenty One</a>
                <br />A Blackjack Game
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.rubik}
              >
                As part of an online JavaScript course I was taking I needed to
                create a Twenty One clone using purely JavaScript, to be run in
                the console. <br />
                <br />
                As an extra challenge, I wanted to find a way to draw the cards,
                rather than just displaying the values (e.g. 7C - 7 of clubs).
                <br />
                <br />
                <b>Technologies used:</b>
                <br />
                <Badge>JavaScript</Badge> <Badge> Readline-sync</Badge>{' '}
                <Badge> Repl.it</Badge>
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
              <div>
                <a
                  href="https://github.com/DaniBedz/JS101/blob/master/lesson_6/twentyone.js"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={classes.button}>
                    View Code{' '}
                    <img
                      src={githubImg}
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '3px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div>
                <a href="https://bedz.me/21" target="_blank" rel="noreferrer">
                  <button type="button" className={classes.button}>
                    Live Demo{' '}
                    <img
                      src={liveImg}
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '3px',
                      }}
                    />
                  </button>
                </a>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={10} md={5}>
          <Card className={`${classes.cardContainer} ${classes.bottomCard} `}>
            <CardMedia component="img" alt="Tic-Tac-Toe" image={project4} />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://bedz.me/tictactoe">Tic-Tac-Toe</a>
                <br />
                Noughts and Crosses
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.rubik}
              >
                Another JavaScript challenge from an online course I took.{' '}
                <br />
                <br />
                This game includes logic for which player goes first, a score
                counter so you need 5 wins to be the champion. <br />
                <br />
                There is also logic that makes the computer select a square in a
                smart way, making it harder to beat. For example if you don't
                choose the middle square on your go, the computer will go for
                that first. If you have two in a row, the computer will block,
                and if the computer has 2 in a row, they will play more
                aggressively.
                <br />
                <br />
                <b>Technologies used:</b>
                <br />
                <Badge>JavaScript</Badge> <Badge> Readline-sync</Badge>{' '}
                <Badge> Repl.it</Badge>
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
              <div>
                <a
                  href="https://github.com/DaniBedz/JS101/blob/master/lesson_6/tictactoe.js"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={classes.button}>
                    View Code{' '}
                    <img
                      src={githubImg}
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '3px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div>
                <a
                  href="https://bedz.me/tictactoe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className={classes.button}>
                    Live Demo{' '}
                    <img
                      src={liveImg}
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '3px',
                      }}
                    />
                  </button>
                </a>
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
