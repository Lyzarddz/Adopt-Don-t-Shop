import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';


const PetCard = ( {pet} ) => {




    return (
        <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="extra content" >
                <ul>
                Name: {pet.name}
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
                <Button variant="outlined" color="inherit" disableElevation > View Assesments</Button> 
                <Button variant="outlined" color="inherit" disableElevation > Adopt </Button> 
            </div>
            </h3>
        </Card>
      )



}

export default PetCard;