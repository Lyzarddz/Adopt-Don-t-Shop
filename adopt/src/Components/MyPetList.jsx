import { Card } from "semantic-ui-react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyPetCard from "./MyPetCard";

const MyPetList = ({currentUser, petData, loadPets}) => {

  useEffect(()=>{
    loadPets()
  },[])

  const params = useParams();

  // console.log(params)

  // const  adopterPets = petData.filter(p => p.adopter.id == params.id)


const cards= petData.map((p, idx)=> {
  // if (params.id == p.id)
    return(
      <div key={idx}>
        <MyPetCard
        key={idx}
        pet={p}
        currentUser={currentUser}
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