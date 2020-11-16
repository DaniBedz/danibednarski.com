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
  Dehaze,
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
    background: "#034694",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "white"
  },
  listIcon: {
    color: "white",
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
  listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  
  },
  {
  listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  
  },
  {
  listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact"

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
            <ListItemIcon className={classes.listIcon}>
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
        <AppBar position="static" style={{ background: "#034694" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Dehaze style={{ color: "white", background: "black", borderRadius: "50%", marginTop: "-0.15em", width: "30px", height: "30px", padding: "3px" }} />
            </IconButton>
            <Typography onClick={toggleSlider("right", true)} variant="h5" style={{ stroke: "3px black", color: "white", cursor: "pointer" }}>Menu</Typography>
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
