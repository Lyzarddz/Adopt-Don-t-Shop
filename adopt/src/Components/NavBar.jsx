import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { GiDogHouse } from 'react-icons/gi';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      paddingLeft: 10
    },
    green: {
      backgroundColor: "#316591"
    },
    heights:{
        height:100
    }
  }));

function NavBar(){

      const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.green}>
          <Toolbar className={classes.heights}>
            <Typography variant="h6" className={classes.title}>
            <GiDogHouse/> Adopt, Don't Shop
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar;