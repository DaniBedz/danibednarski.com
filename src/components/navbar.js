import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons";

import avatar from "../avatar.png"
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";

// CSS STYLES
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "black",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "#57877D"
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
  listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  
  },
  {
  listIcon: <Apps />,
    listText: "Portfolio",
    // listPath: "/"
  
  },
  {
  listIcon: <ContactMail />,
    listText: "Contact",
    // listPath: "/"

  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  })

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  }
  const classes = useStyles();

  const sideList = slider => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}  
    >
        <Avatar className={classes.avatar} src={avatar} alt="Dani Bednarski" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (

            <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
              <ListItemText
                primary={lsItem.listText}
                className={classes.listItem}
              />
          </ListItem>
          ))}
        </List>
      </Box>

  )
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#57877D" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "#57877D", background: "black", borderRadius: "50%" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "black" }}>Menu</Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}>
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar;
