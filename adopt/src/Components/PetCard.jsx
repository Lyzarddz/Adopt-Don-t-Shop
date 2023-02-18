import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const PetCard = ( {pet, currentUser, adoptPet, petData, isAdopted, setIsAdopted} ) => {

const [errors, setErrors] = useState([]);
const navigate = useNavigate()

const {id} = pet


function petAdopted (id) {
  petData.filter(p => p.id !== id)
}

console.log(pet)

function adoptPet(e){
  e.preventDefault();
 

  var userId = currentUser.id
    
     fetch(`http://localhost:3000/api/pets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          adopted: true,
	       "adopter_id": userId
       })
      })
      .then(res => {
        if(res.ok){
          res.json().then(petAdopted(id))
          alert("Congratulations! You just adopted a Dog");
          navigate("/mypets")
          setIsAdopted(true);
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
}




const myStyles = {
  height:'50vh',
}

    return (
        <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">

              <img src={pet.image} style={myStyles} />
              <br/>
              <br/>
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
                <br/>
                Rescue number: {pet.rescue.phone}
                <br/>
                Rescue Phone: {pet.rescue.email}
                </ul>
                <br/>
                <Button variant="outlined" color="inherit"  to={`/summaries/${id}`} component={ Link } fontFamily={'Unbounded'} > View Summaries for {pet.name}</Button> 
                <br/>
                <br/>
                <br/>
                { currentUser ? 
                 <Button variant="outlined" color="inherit" onClick={adoptPet} disableElevation > Adopt </Button> : ""
                }
               
            </div>
            </h3>
        </Card>
      )
}

export default PetCard;