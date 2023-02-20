import React from 'react'
import { Card } from "semantic-ui-react";
import PetCard from './PetCard';
import {  useEffect } from 'react';


const PetList = ( {petData, loadPets, currentUser, petAdopted, setIsAdopted}) => {

    useEffect(() => {
    loadPets()
    },[])


    const cards= petData.map((p, idx)=> {
        return(
          <div key={idx}>
            <PetCard
            petData={petData}
            key={idx}
            pet={p}
            currentUser={currentUser}
            setIsAdopted= {setIsAdopted}
            petAdopted={petAdopted}
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
}
  
export default PetList;