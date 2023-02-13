import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const PetCard = ( {pet, currentUser} ) => {

const {id} = pet

console.log(pet.image)

    return (
        <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">

              <img src={pet.image}  />
                <ul>
                Name: {pet.name}
                  <br/>
                Breed: {pet.breed}
                <br></br>
                Gender: {pet.gender}
               <br></br>
                Age: {pet.age}
                <br/>
                Friendly?: {pet.friendly}
                <br/>
                House Trained? {pet.house_trained}
                <br/>
                Health Status: {pet.health}
                <br/>
                Description: {pet.description}
                <br/>
                <br/>
                Rescue: {pet.rescue.name}
                </ul>
                <Button variant="outlined" color="inherit"  to={`/summaries/${id}`} component={ Link } fontFamily={'Unbounded'} > View Summaries</Button> 
                <br/>
                <br/>
                <br/>

                { currentUser ? 
                 <Button variant="outlined" color="inherit" disableElevation > Adopt </Button> : ""
                }
               
            </div>
            </h3>
        </Card>
      )
}

export default PetCard;