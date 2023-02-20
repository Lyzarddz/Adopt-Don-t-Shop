import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const RescueCard = ({ rescue }) => {

    const myStyles = {
        height:'20vh',
    }

    return(
    <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
                <ul>
                <br/>
                <img src={rescue.image} style={myStyles} />
                <br/>
                 {rescue.name}
                <br/>
                <br/>
                Location: {rescue.location}
                <br/>
                <br/>
                Phone Number: {rescue.phone}
                <br/>
                <br/>
                Email: {rescue.email}
                <br/>
                <br/>
                </ul>
                <Button variant="outlined" color="inherit" to={`/rescues/${rescue.id}/pets`} component={ Link } fontFamily={'Unbounded'}> View Adoptable Pets</Button> 
                <br/>
            </div>
            </h3>
        </Card>
    )
}

export default RescueCard;