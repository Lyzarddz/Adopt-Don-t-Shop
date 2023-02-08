import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';


const PetCard = ( {pet} ) => {

console.log(pet)


    return (
        <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
                <ul>
                Name: {}
                  <br/>
                Breed: 
                <br></br>
                Gender:   
               <br></br>
                Age: 
                <br/>
                Friendly?:
                <br/>
                House Trained?
                <br/>
                Health Status:
                <br/>
                Description:
                <br/>
                <br/>
                Rescue:
                </ul>
                <Button variant="outlined" color="inherit"  fontFamily={'Unbounded'} > View Assesments</Button> 
                <br/>
                <br/>
                <br/>
                <Button variant="outlined" color="inherit" disableElevation > Adopt </Button> 
            </div>
            </h3>
        </Card>
      )



}

export default PetCard;