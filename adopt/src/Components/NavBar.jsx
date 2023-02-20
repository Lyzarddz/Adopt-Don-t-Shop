import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GiDogHouse } from 'react-icons/gi';
import React, { useContext } from "react";
import { LoginContext } from '../Helper/Context';


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

function NavBar() {

   const classes = useStyles();
   const navigate = useNavigate();
   const {currentUser, setCurrentUser} = useContext(LoginContext)


      function logout() {
        fetch('http://localhost:3000/api/logout', {
          method: 'DELETE',
        })
            setCurrentUser(false);
            localStorage.setItem('currentUser', false);
            navigate("/");
        }

      function loggedInLinks(){
        return (
          <div>
                <Button color="inherit" onClick={logout} >Logout</Button> 
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