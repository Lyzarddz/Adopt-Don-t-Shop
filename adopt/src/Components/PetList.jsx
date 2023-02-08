import React from 'react'
import { Card } from "semantic-ui-react";
import PetCard from './PetCard';
import {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const PetList = ( {loadPets}) => {


    useEffect(()=>{
        loadPets()
      },[])


}
  
export default PetList;