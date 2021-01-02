import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Badge } from '@material-ui/core';
import "./resume.scss";

const useStyles = makeStyles((theme) => ({
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '4px solid #034694',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    backgroundColor: 'black',
    padding: '1rem',
    borderRadius: '25px',
    border: '3px solid #002654',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: '#002654 #002654 transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: '#002654',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent #002654 #002654',
      },
    },
  },
  timeLineYear: {
    fontFamily: 'Rubik',
    textAlign: 'center',
    maxWidth: '7.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: '#034694',
    color: 'white',
    lineHeight: 1,
    padding: '1.2rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    fontFamily: 'Rubik',
    fontWeight: 'bolder',
    color: 'white',
    textTransform: 'uppercase',
    backgroundColor: 'black',
    borderRadius: '25px',
    border: '3px solid #002654',
    textAlign: 'center',
    maxWidth: '20rem',
    margin: '1rem 1rem 0 auto',
    fontSize: '1.4rem',
    lineHeight: 1,
    padding: '1.2rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      marginTop: '1rem',
    },
  },
  subHeading: {
    fontFamily: 'Rubik',
    fontWeight: 'bolder',
    color: 'white',
    padding: '0',
    textTransform: 'uppercase',
  },
  mainText: {
    fontFamily: 'Rubik',
  },
  mainContainer: {
    marginTop: '-8rem',
  },
  projectImg: {
    margin: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Technical Advisor / QA Specialist / Dev. Support
            </Typography>
            <img src='images/squarespaceImg.png' alt="Squarespace" className={ classes.projectImg } width="250vw"/>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: 'white' }}
              className={classes.mainText}
            >
              <ul>
                <li>
                  Providing advanced technical support for escalated issues that
                  require developer interaction and resolution.
                </li>
                <li>
                  Supporting client developers to use the product API to create
                  their own integrations.
                </li>
                <li>
                  Co-writing test strategy and test plan documentation for
                  Acuity Scheduling’s integration into the Squarespace CMS.
                </li>
                <li>
                  Maintaining and improving automated tests in Ghost Inspector,
                  including the addition of data attributes to site elements to
                  improve the resilience of tests.
                </li>
                <li>
                  Performing the migration of automated tests from Ghost
                  Inspector to Cypress.io.
                </li>
                <li>
                  Performing manual tests of code deployed to the staging
                  environment and communicating with the developers any relevant
                  outcomes including bugs/performance issues, and then
                  verifying fixes.
                </li>
              </ul>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Software Integration Specialist
            </Typography>
            <img src='images/acuityImg.png' alt="Acuity Scheduling" className={ classes.projectImg } width="250vw" />
            <Badge style={{display: 'block', textAlign: 'center'}}>Acquired by Squarespace (2019)</Badge>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: 'white' }}
              className={classes.mainText}
            >
              <ul>
                <li>
                  Providing email and social media support to current and
                  potential customers.
                </li>
                <li>
                  Assisting customers to change the style and layout of their
                  scheduling page using CSS and JavaScript.
                </li>
                <li>
                  Identifying and troubleshooting potential bugs, investigating
                  ways to improve the product, and passing on feature requests
                  to the developer team.
                </li>
                <li>
                  Helping customers learn the best way to use scheduling
                  software to give them more time to concentrate on their
                  business.
                </li>
                <li>
                  Owning support interactions and advocating for customers.
                  Ensuring that their voices are heard and their concerns are
                  addressed in a positive way.
                </li>
                <li>
                  Working independently on associated support projects such as
                  updating help articles, improving onboarding resources and
                  creating engaging training materials.
                </li>
                <li>
                  Resolving billing and account management enquiries in a
                  prompt, fair manner.
                </li>
              </ul>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Senior Service Desk Technician
            </Typography>
              <img src='images/kineticImg.png' alt="Kinetic IT" className={ classes.projectImg } width="150vw" />
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: 'white' }}
              className={classes.mainText}
            >
              <ul>
                <li>
                  Classifying, logging and updating all tickets into IT logging
                  tool - Microsoft Service Manager Console and Maximo.
                </li>
                <li>
                  Processing tickets and communicating with users in adherence
                  to applicable service level agreements (SLA’s).
                </li>
                <li>
                  Providing support via the online portal, telephone and
                  face-to-face.
                </li>
                <li>
                  Liaising with system owners and third parties to manage jobs
                  through to resolution.
                </li>
                <li>Undertake incident management as directed.</li>
                <li>
                  Creating, reviewing and maintaining of knowledge base
                  articles.
                </li>
                <li>Providing technical escalation support within team.</li>
                <li>
                  Liaising with third-party vendors in the procurement of
                  devices.
                </li>
                <li>
                  Creating, administration and support of user accounts across
                  various platforms - Active Directory, Microsoft Exchange, SAP,
                  RSA SecurID.
                </li>
                <li>
                  Administration and support of computer assets via the use of
                  SCCM.
                </li>
              </ul>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2010
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              System Admin
            </Typography>
              <img src='images/sagovImg.png' alt="SA Government" className={ classes.projectImg } width="200vw" />
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: 'white' }}
              className={classes.mainText}
            >
              <ul>
                <li>
                  Providing application support for a bespoke procurement
                  product across several government departments.
                </li>
                <li>
                  Assisting procurement departments and ministers on invoice and
                  requisition processes.
                </li>
                <li>
                  Identifying and troubleshooting software issues and engaging
                  the developer team for more technical resolution.
                </li>
                <li>
                  Monitoring and maintaining system infrastructure health.
                </li>
                <li>
                  Working with senior admins to resolve high priority issues.
                </li>
                <li>
                  Automating reporting processes to meet requirements in a more
                  efficient manner.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;