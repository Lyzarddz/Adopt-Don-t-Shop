import Card from '@mui/material/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';

const MyPetCard = ( {pet, currentUser} ) => {

const {id} = pet

// console.log(pet)

const myStyles = {
  height:'50vh',
}

    return (
        <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
              {Object.keys(pet).map((p) => {
                return (
                    <React.Fragment>
                   Pet: {p.name}
                     <br/>
                     <img src={p.image} style={myStyles} />
                    <br/>
                    <br/>
                    Breed: {p.date}
                    <br/>
                    <br/>
                    Gender: {p.gender}
                    <br/>
                    <br/>
                </React.Fragment>
                )
              })}


              <img src={pet.image} style={myStyles} />
              <br/>
              <br/>
                <ul>
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
                Rescued From: {pet.rescue.name}
                <br/>
                <br/>
                Rescue number: {pet.rescue.phone}
                <br/>
                Rescue Phone: {pet.rescue.email}
                </ul>
                <br/>
                <Button variant="outlined" color="inherit"  to={`/summaries/${id}`} component={ Link } fontFamily={'Unbounded'} > View Summaries for {pet.name}</Button> 
                <br/>
                <br/>
            </div>
            </h3>
        </Card>
      )
}

export default MyPetCard;