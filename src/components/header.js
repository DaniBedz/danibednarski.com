import React from 'react';
import {
  Typography,
  Avatar,
  Grid,
  Box
} from "@material-ui/core";
import avatar from "../images/avatar.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import 'react-typed/dist/animatedCursor.css';


// CSS Styles
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  
  },

  title: {
    color: "white",
    "-webkit-text-stroke": "1px black",
    background: "#000",
    borderRadius: "25px",
    borderWidth: "0.5px",
    borderColor: "white",
    borderStyle: "solid",
    fontSize: "5vw",
    width: "40vw",
    marginLeft: "-13vw",
    paddingTop: "0.5vw"
  },

   subtitle: {
     color: "#034694",
     marginBottom: "1rem",
     background: "#000",
     borderRadius: "25px",
     borderWidth: "0.5px",
     borderColor: "white",
     borderStyle: "solid",
     marginTop: "-10px",
     fontSize: "3.5vw",
     width: "40vw",
     marginLeft: "-13vw",
     paddingTop: "0.5vw"
    },
    
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "15vw",
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
      <Typography className={classes.subtitle} variant="h5">
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
