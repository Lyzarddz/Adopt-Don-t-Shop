import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';


const RescueCard = ({rescue}) => {

console.log(rescue)


    return(
    <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
                <ul>
                Rescue: {rescue.name}
                <br/>
                <br/>
                Location:
                <br/>
                <br/>
                Phone Number:
                <br/>
                <br/>
                Email: {rescue.email}
                <br/>
                <br/>
                </ul>
                <Button variant="outlined" color="inherit"  fontFamily={'Unbounded'} > View Adoptable Pets</Button> 
                <br/>
            </div>
            </h3>
        </Card>
    )
}

export default RescueCard;