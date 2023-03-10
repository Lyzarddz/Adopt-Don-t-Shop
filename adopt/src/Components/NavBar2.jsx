import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useContext } from "react";
import { LoginContext } from '../Helper/Context';


const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
        paddingRight: 20,
        minWidth: 150,
        minHeight: 60,
        color: "#32373b",
        fontWeight: "bold",
    },
    title: {
      flexGrow: 1,
      padding: 150,
  
    },
    green: {
      backgroundColor: "#aab4bb",

    },
    heights:{
        height:130
    },
    second: {
        textAlign: "left"
    }
  }));

function NavBar2(){

    const classes = useStyles();
    const {currentUser, setCurrentUser} = useContext(LoginContext)

  function loggedInLinks(){
    return (
      <div >
              <Button color="inherit"  variant="outlined" to="/" className={classes.menuButton}  component={ Link }>Home</Button> 
              &nbsp;
              &nbsp;
              <Button color="inherit"  variant="outlined" to="/pets" className={classes.menuButton}  component={ Link }>Adoptable Pets</Button> 
              &nbsp; 
              &nbsp;
              <Button color="inherit"  variant="outlined" to="/rescues" className={classes.menuButton}  component={ Link }>Rescues</Button> 
              &nbsp; 
              &nbsp;
              <Button color="inherit"  variant="outlined" to="/mypets" className={classes.menuButton}  component={ Link }>My Pets</Button> 
              &nbsp;
              &nbsp;
              <Button color="inherit"  variant="outlined" to="/profile" className={classes.menuButton}  component={ Link }>My Profile</Button> 
              &nbsp;
              &nbsp;
      </div>
    )
  }

  function loggedOutLinks(){
    return(
      <div >
          <Button color="inherit" to="/" variant="outlined" className={classes.menuButton} component={ Link }>Home</Button> 
          &nbsp; 
          &nbsp;
          <Button color="inherit" to="/pets" variant="outlined" className={classes.menuButton} component={ Link }>Adoptable Pets</Button> 
          &nbsp; 
          &nbsp;
              <Button color="inherit"  variant="outlined" to="/rescues" className={classes.menuButton}  component={ Link }>Rescues</Button> 
              &nbsp; 
              &nbsp;
      </div>
    )
  }

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.green}>
          <Toolbar className={classes.heights}>
            <Typography variant="h6" className={classes.title}>
        
            </Typography>
            { currentUser ? loggedInLinks() : loggedOutLinks()}
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar2;