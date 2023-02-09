import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GiDogHouse } from 'react-icons/gi';
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      paddingLeft: 10,
      fontFamily: 'Unbounded',
    },
    green: {
      backgroundColor: "#316591"
    },
    heights:{
        height:85
    }
  }));

function NavBar(){

      const classes = useStyles();


      const [currentUser, setCurrentUser] = useState(false);



  function loggedInLinks(){
    return (
      <div>
            <Button color="inherit" to="/logout" component={ Link }>Logout</Button> 
      </div>
    )
  }

  function loggedOutLinks(){
    return(
      <div >
          <Button color="inherit" to="/login" component={ Link }>Login</Button> 
          <Button color="inherit" to="/signup" component={ Link } >Sign Up</Button> 
      </div>
    )
  }


    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.green}>
          <Toolbar className={classes.heights}>
            <Typography variant="h6" className={classes.title}>
            <GiDogHouse fontSize={45}/> 
            dopt, Don't Shop
            </Typography>
            { currentUser ? loggedInLinks() : loggedOutLinks()}
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar;