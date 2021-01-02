import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

// CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },

  title: {
    color: 'white',
    background: 'RGBA(0,0,0,0.6)',
    borderRadius: '25px',
    border: '2px solid #002654',
    fontSize: 'calc(1.2rem + 1.7vw)',
    textAlign: 'center',
    width: 'calc(6rem + 25vw)',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  subtitle: {
    color: '#034694',
    background: 'RGBA(0,0,0,0.6)',
    borderRadius: '25px',
    border: '2px solid #002654',
    fontSize: 'calc(1rem + 1vw)',
    paddingTop: '0.5vw',
    textAlign: 'center',
    width: 'calc(6rem + 25vw)',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5px',
  },

  typedContainer: {
    justifyItems: 'center',
    textAlign: 'center',
    zIndex: 1,
    whiteSpace: 'nowrap',
  },
  noSelect: {
    webkitTouchCallout: 'none' /* iOS Safari */,
    webkitUserSelect: 'none' /* Safari */,
    khtmlUserSelect: 'none' /* Konqueror HTML */,
    mozUserSelect: 'none' /* Old versions of Firefox */,
    msUserSelect: 'none' /* Internet Explorer/Edge */,
    userSelect:
      'none' /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Typography
        className={`${classes.title} ${classes.noSelect}`}
        variant="h3"
      >
        Dani Bednarski
      </Typography>
      <Typography
        className={`${classes.subtitle} ${classes.noSelect}`}
        variant="h5"
      >
        <Typed
          strings={[
            'Web Developer',
            'Creator of Things',
            'Problem Solver',
            'Always Learning',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
