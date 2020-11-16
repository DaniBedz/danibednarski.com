import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./navbar";
import squarespaceImg from "../squarespaceImg.png";
import acuityImg from "../acuityImg.png";
import kineticImg from "../kineticImg.png";
import sagovImg from "../sagovImg.png";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "black"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #034694",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #034694",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#034694 #034694 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#034694"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #034694 #034694"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#034694",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "#034694",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography
          variant="h4"
          align="center"
          className={classes.heading}
        >
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2"
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
              Technical Consultant - Customer & QA
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#034694" }}
              >
              <img src={squarespaceImg} alt="Squarespace" width="250vw"/>
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "white" }}
            >
                <ul>
                  <li>Providing advanced technical support for escalated issues that require developer interaction and resolution.</li>
                  <li>Supporting client developers to use the product API to create their own integrations.</li>
                  <li>Co-writing test strategy and test plan documentation for Acuity Scheduling’s integration into the
                  Squarespace CMS.</li>
                  <li>Performing manual tests of code deployed to the staging environment and communicating with the
                  developers any relevant outcomes, including bugs, performance issues and then verifying fixes.</li>
                  <li>Maintaining and improving automated tests in Ghost Inspector, including the addition of data
                  attributes to site elements to improve the resilience of tests.</li>
                  <li>Assisting in the migration of automated tests from Ghost Inspector into Cypress.io.</li>
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
              Customer Advisor
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#034694"}}
            >
              <img src={acuityImg} alt="Acuity Scheduling" width="250vw" />
              <br/>
              Acquired by Squarespace (2019)
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "white" }}
            >
              <ul>
                <li>Providing email and social media support to current and potential customers.</li>
                <li>Assisting customers to change the style and layout of their scheduling page using CSS and JavaScript.</li>
                <li>Identifying and troubleshooting potential bugs, investigating ways to improve the product, and
                passing on feature requests to the developer team.</li>
                <li>Helping customers learn the best way to use scheduling software to give them more time to concentrate on their business.</li>
                <li>Owning support interactions and advocating for customers. Ensuring that their voices are heard
                and their concerns are addressed in a positive way.</li>
                <li>Working independently on associated support projects such as updating help articles,
                improving onboarding resources and creating engaging training materials.</li>
                <li>Resolving billing and account management enquiries in a prompt, fair manner.</li>
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
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#034694"}}
            >
              <img src={kineticImg} alt="Kinetic IT" width="150vw" />
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "white" }}
            >
              <ul>
                <li>Classifying, logging and updating all tickets into IT logging tool - Microsoft Service Manager Console and Maximo.</li>
                <li>Processing tickets and communicating with users in adherence to applicable service level agreements (SLA’s).</li>
                <li>Providing support via the online portal, telephone and face-to-face.</li>
                <li>Liaising with system owners and third parties to manage jobs through to resolution.</li>
                <li>Undertake incident management as directed.</li>
                <li>Creating, reviewing and maintaining of knowledge base articles.</li>
                <li>Providing technical escalation support within team.</li>
                <li>Liaising with third-party vendors in the procurement of devices.</li>
                <li>Creating, administration and support of user accounts across various platforms - Active Directory, Microsoft Exchange, SAP, RSA SecurID.</li>
                <li>Administration and support of computer assets via the use of SCCM.</li>
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
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#034694" }}
            >
              <img src={sagovImg} alt="SA Government" width="200vw" />
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "white" }}
            >
              <ul>
                <li>Providing application support for a bespoke procurement product across several government departments.</li>
                <li>Assisting procurement departments and ministers on invoice and requisition processes.</li>
                <li>Identifying and troubleshooting software issues and engaging the developer team for more technical resolution.</li>
                <li>Monitoring and maintaining system infrastructure health.</li>
                <li>Working with senior admins to resolve high priority issues.</li>
                <li>Automating reporting processes to meet requirements in a more efficient manner.</li>
              </ul>
            </Typography>
            
          </Box>
          
       </Box>
      </Box>
    </>
  )
}

export default Resume