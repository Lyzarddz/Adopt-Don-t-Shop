
import { GiDogHouse, GiSittingDog } from 'react-icons/gi';
import { FaDog, FaHome } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


const HomePage = () => {

    const myStyles = {
        height:'100vh',
        backgroundColor: "#e0e5e9", 
    }

    const styles = {
        paddingTop: "65px",
        paddingLeft: "315px",
        paddingBottom: "25px",
        width: "1150px",
        height: '35vh',
    }

    const style2 = {
        fontFamily: 'Unbounded',
        textAlign: 'center',
        color: "#32373b",
        paddingTop: "20px"
    }

    const style3 = {
        alignItems: 'center',
        paddingLeft: "850px",
        fontSize: "45px"
    }

    const style4 = {
        alignItems: 'center',
        paddingLeft: "890px",
        fontSize: "65px"
    }


    return (
      <div style={myStyles}>
        <br/>
        <h1 style={style2}>You can't change a dogs past, but you could rewrite his future!</h1>
        <img src={"https://user-images.githubusercontent.com/91993983/217617466-a4791f51-090c-4907-9c2e-8cc20106d687.jpg"} alt="React Images" style={styles} />
        <h2  style={style2}>
            <GiDogHouse fontSize={45}/> 
            dopt, Don't Shop has been helping mans best friend find their furever homes since 2023</h2>
            <h3 style={style2}>*All of our available dogs have been fully vetted, vaccinated, microchipped and altered*</h3>
            <br/>
            <br/>
            <br/>
            <h1 style={style3}><GiSittingDog/> <FaHome/> </h1>
            <br/>
            <h2 style={style2}>Find adoptable dogs here: </h2>
            <br/>
            <Button color="inherit" to="/pets" component={ Link }><FaDog style={style4} /></Button> 
       </div>
    )
}

export default HomePage;