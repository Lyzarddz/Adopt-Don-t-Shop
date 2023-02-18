import { Card } from "semantic-ui-react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyPetCard from "./MyPetCard";

const MyPetList = ({currentUser, petData, loadPets}) => {

const [myPets, setMyPets] = useState([]);
const [errors, setErrors] = useState([]);

  useEffect(()=>{
    loadMyPets()
  },[])

  const {id} = currentUser;


  function loadMyPets() {

    fetch(`http://localhost:3000/api/adopters/mypets/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
    })
    .then(res => {
      if(res.ok){
          res.json().then(pets => {
              setMyPets(pets)
          })
      }else {
        console.log(res)
        res.json().then(json => setErrors(json.errors))
      }
    })
    }


const cards= myPets.map((p, idx)=> {
    return(
      <div key={idx}>
        <MyPetCard
        key={idx}
        pet={p}
        currentUser={currentUser}
        myPets={myPets}
      />
      </div>
    )
}) 



return (
  <Card>
    <h1 className='primary'>Adoptable Dogs</h1>
  <br></br>
  <br></br>
      {cards}
<br/>
<br/>
  </Card>
)










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



    // return (
    //   <div className="primary">
    //     <h1>My Pets</h1>

    //     {adopterPets.map((p, idx)=> {
    //        return(
    //       <div key={idx}>
    //         <Card >
    //            Name: {p.id}
    //               <br/>
    //             Breed: {p.breed}
    //             <br></br>
    //             Gender: {p.gender}
    //            <br></br>
    //             Age: {p.age}
    //             <br></br>
    //             Adopted From: {p.rescue}
    //       </Card>
    //       </div>
    //   )
    //  })  }


    // </div>
          
    
    // )
}

export default MyPetList;