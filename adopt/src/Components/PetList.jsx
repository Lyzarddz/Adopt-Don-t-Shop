import React from 'react'
import { Card } from "semantic-ui-react";
import PetCard from './PetCard';
import {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const PetList = ( {petData, loadPets, currentUser}) => {

        useEffect(()=>{
        loadPets()
      },[])


    const cards= petData.map((p, idx)=> {
        return(
          <div key={idx}>
            <PetCard
            key={idx}
            pet={p}
            currentUser={currentUser}
          />
          </div>
        )
    })  



    return (
        <Card>
          <h1 className='primary'>Adoptable Pets</h1>
        <br></br>
        <br></br>
            {cards}
      <br/>
      <br/>
        </Card>
      )

}
  
export default PetList;