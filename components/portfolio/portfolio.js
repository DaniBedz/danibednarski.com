import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Badge,
  Typography,
} from '@material-ui/core';
import "./portfolio.scss";


const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
    cursor: 'default',
  },
  cardContainer: {
    margin: '2rem 6rem 2rem 6rem',
    height: 'max-content',
    borderRadius: '15px',
    color: 'white',
    backgroundColor: 'black',
    border: '2px solid #002654',
    alignContent: 'space-between',
  },
  title: {
    fontSize: '2.5rem !important',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
  },
  buttonContainer: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '15px',
    color: 'white',
  },
  button: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'black',
    border: '2px solid #002654',
    fontSize: '1.75rem',
    borderRadius: '15px',
    paddingBottom: '12px',
    cursor: 'pointer',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
     '&:hover': {
      backgroundColor: '#004089',
    }
  },
  buttonDiv: {
    paddingInline: '5px',
  }
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={10} md={5}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="can.do - A simple to-do app"
              image="/images/project1.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://bedz.me/todo/">can.do</a>
                <br />Fully responsive To-do app
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
              >
                As part of Generation Australia's web developer program,
                we needed to work in pairs and create a to-do app.
                <br />
                <br />
                This project is not yet complete.
                <br />
                <br />
                <b>Technologies used:</b>
                <br />
                <Badge>jQuery</Badge> <Badge>Flatpickr</Badge>{' '}
                <Badge>Bootstrap</Badge> <Badge>bootstrap-select</Badge>{' '}
                <Badge>Font Awesome</Badge>
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
              <div className={classes.buttonDiv}>
                <a
                  href="https://github.com/DaniBedz/todo/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    View Code{' '}
                    <img
                      src='/images/github.png'
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '10px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div className={classes.buttonDiv}>
                <a href="https://bedz.me/todo" target="_blank" rel="noreferrer">
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    Live Demo{' '}
                    <img
                      src='/images/live.png'
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '10px',
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
              alt="bedz.me - A simple link shortener service"
              image="/images/project2.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://bedz.me/">bedz.me</a>
                <br />A Simple Link Shortener Service
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
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
              <div className={classes.buttonDiv}>
                <a
                  href="https://github.com/DaniBedz/bedz.me/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    View Code{' '}
                    <img
                      src='/images/github.png'
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '10px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div className={classes.buttonDiv}>
                <a href="https://bedz.me" target="_blank" rel="noreferrer">
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    Live Demo{' '}
                    <img
                      src='/images/live.png'
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '10px',
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
              alt="xrat.es - Currency Converter"
              image='images/project3.png'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://xrat.es/">xrat.es</a>
                <br />
                Currency Converter Web App
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
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
              <div className={classes.buttonDiv}>
                <a
                  href="https://github.com/DaniBedz/xrat.es"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    View Code{' '}
                    <img
                      src='/images/github.png'
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '10px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div className={classes.buttonDiv}>
                <a href="https://xrat.es" target="_blank" rel="noreferrer">
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    Live Demo{' '}
                    <img
                      src='/images/live.png'
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '10px',
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
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="DaniBednarski.com - Portfolio Site"
              image='/images/project4.png'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://danibednarski.com">DaniBednarski.com</a>
                <br />This site!
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
              >
                As a web developer, a good way to show off your skills is your personal site. I've tried
                to make it interesting, test my limits and use new technologies.<br />
                <br />
                On the home screen you can see some of the technologies I know, 
                and you can click to add more to the page.
                <br /><br />
                Arrows can be used for navigation, as long as a text field isn't selected (because that 
                would be annoying..).
                <br /><br />
                <b>Technologies used:</b>
                <br />
                <Badge>Next.js</Badge> <Badge>React</Badge>{' '}
                <Badge>tsparticles</Badge> <Badge>AwesomeButtons</Badge>{' '}
                <Badge>React Awesome Slider</Badge> <Badge>Material-UI</Badge>{' '} 
                <Badge>EmailJS</Badge> <Badge>React Typed</Badge> <Badge>Sass</Badge>{' '}
                <Badge>AWS</Badge> <Badge>S3</Badge>{' '}
                <Badge>Route53</Badge> <Badge>CloudFront</Badge>{' '}
                <Badge>Certificate Manager</Badge>
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
              <div className={classes.buttonDiv}>
                <a
                  href="https://github.com/DaniBedz/danibednarski.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    View Code{' '}
                    <img
                      src='/images/github.png'
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '10px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div className={classes.buttonDiv}>
                <a href="https://danibednarski.com/" target="_blank" rel="noreferrer">
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    Live Demo{' '}
                    <img
                      src='/images/live.png'
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </button>
                </a>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 5 */}
        <Grid item xs={12} sm={10} md={5}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Twenty One - Card Game"
              image='/images/project5.png'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://bedz.me/21">Twenty One</a>
                <br />A Blackjack Game
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
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
              <div className={classes.buttonDiv}>
                <a
                  href="https://github.com/DaniBedz/JS101/blob/master/lesson_6/twentyone.js"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    View Code{' '}
                    <img
                      src='/images/github.png'
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '10px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div className={classes.buttonDiv}>
                <a href="https://bedz.me/21" target="_blank" rel="noreferrer">
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    Live Demo{' '}
                    <img
                      src='/images/live.png'
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </button>
                </a>
              </div>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 6 */}
        <Grid item xs={12} sm={10} md={5}>
          <Card className={`${classes.cardContainer} ${classes.bottomCard} `}>
            <CardMedia component="img" alt="Tic-Tac-Toe" image='/images/project6.png' />
            <CardContent>
              <Typography gutterBottom variant="h5" className={classes.title}>
                <a href="https://bedz.me/tictactoe">Tic-Tac-Toe</a>
                <br />
                Noughts and Crosses
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
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
              <div className={classes.buttonDiv}>
                <a
                  href="https://github.com/DaniBedz/JS101/blob/master/lesson_6/tictactoe.js"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignContent: 'center' }}
                >
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    View Code{' '}
                    <img
                      src='/images/github.png'
                      alt="GitHub icon"
                      style={{
                        position: 'relative',
                        top: '8px',
                        marginLeft: '10px',
                      }}
                    />
                  </button>
                </a>
              </div>
              <div className={classes.buttonDiv}>
                <a
                  href="https://bedz.me/tictactoe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className={ `{ ${classes.button } ${classes.buttonDiv }}`}>
                    Live Demo{' '}
                    <img
                      src='/images/live.png'
                      alt="Live icon"
                      style={{
                        position: 'relative',
                        top: '10px',
                        marginLeft: '10px',
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
