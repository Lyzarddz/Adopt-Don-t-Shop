import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PetCard from './PetCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MyPets = ({currentUser, petData, loadPets}) => {

  useEffect(()=>{
    loadPets()
  },[])

  console.log(petData)

    const params = useParams();
    const  adopterPets = petData.filter(p => p.adopter.id == params.id)



// adopterPets.map((p, idx)=> {
//       return(
//         <div key={idx}>
//           <Card
//           key={idx}
//           pet={p}
//           currentUser={currentUser}
//         />
//         </div>
//       )
//   })  

console.log(adopterPets)

    return (
      <div className="primary">
        <h1>My Pets</h1>

        {adopterPets.map((p, idx)=> {
           return(
          <div key={idx}>
            <Card >
               Name: {p.id}
                  <br/>
                Breed: {p.breed}
                <br></br>
                Gender: {p.gender}
               <br></br>
                Age: {p.age}
                <br></br>
                Adopted From: {p.rescue}
          </Card>
          </div>
      )
     })  }


    </div>
          
    
    )
}

export default MyPets;