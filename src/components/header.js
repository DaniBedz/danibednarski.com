import React from 'react';
import {
  Typography,
  Avatar,
  Grid,
  Box
} from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";


// CSS Styles
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  
  },

  title: {
    color: "#57877D",
    "-webkit-text-stroke": "0.5px black"
  },

   subtitle: {
     color: "tan",
     marginBottom: "3rem",
     "-webkit-text-stroke": "0.5px black"
  },
   
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
   }
}));



const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Dani Bednarski" />
      </Grid>
      <Typography className={classes.title} variant="h3">
        Dani Bednarski
      </Typography>
      <br/>
      <Typography className={classes.subtitle} variant="h4">
        <Typed
          strings={["Junior Web Developer", "Creator of Things", "Problem Solver", "Always Learning"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
  
    </Box>
  )
};

export default Header;
