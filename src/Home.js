import React from 'react'
import {AppBar, Toolbar, IconButton, MenuIcon,Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home=()=>{ 
  const classes = useStyles();
    return(
      <div>

      </div>
    )
  
}

export default Home;