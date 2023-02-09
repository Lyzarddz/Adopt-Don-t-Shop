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
                Name: {pet.name}
                  <br/>
                Breed: {pet.breed}
                <br></br>
                Gender:   {pet.gender}
               <br></br>
                Age: {pet.age}
                <br/>
                Friendly?: {pet.friendly}
                <br/>
                House Trained? {pet.house_trained}
                <br/>
                Health Status:{pet.health}
                <br/>
                Description: {pet.description}
                <br/>
                <br/>
                Rescue: {pet.rescue.name}
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