import Card from '@mui/material/Card';
import React from 'react';
import Button from '@material-ui/core/Button';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const SummaryCard = ({pet, currentUser, petAdopted, setIsAdopted}) => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const {id} = pet

    function adoptPet(e){
        e.preventDefault();
       
      
        var userId = currentUser.id
          
        if (window.confirm('Are you sure you want to adopt this dog?')){
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
      }


    const myStyles = {
        height:'40vh',
      }


    return(
    <Card variant="outlined">
            <div className="content" >
            </div>
            <h3>
            <div className="primary">
            <img src={pet.image} style={myStyles} />
                <br/>
                Pet: {pet.name}
                <br/>
                { pet.summaries.map((s) =>{
                    return(
                        <React.Fragment>
                            <br/>
                            <br/>
                            <br/>
                            {s.date}
                            <br/>
                            <br/>
                           {s.notes}
                            <br/>
                            <br/>
                            **************************************
                            <br/>
                            <br/>
                        
                        </React.Fragment>
                         )
                  })
                }
                <br/>
                  { currentUser ? 
                      <Button variant="outlined" color="inherit" onClick={adoptPet} disableElevation > Adopt </Button> : ""
                  }
                <br/>
                <br/>
            </div>
            </h3>
        </Card>
    )
}

export default SummaryCard;