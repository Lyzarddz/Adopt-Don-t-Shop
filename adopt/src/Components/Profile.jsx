
import Button from '@material-ui/core/Button';
import { Form } from "semantic-ui-react";
import { useState } from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";

const Profile = ({ currentUser, updateProfile, deleteProfile }) => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
      });


      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

      const {id} = currentUser;


      function handleEditProfileClick(e) {
        e.preventDefault();
      
       fetch(`http://localhost:3000/api/adopters/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(res => {
          if(res.ok){
            res.json().then(updateProfile(id))
            alert("Profile updated successfully");
            navigate((`/profile`))
          } else {
            res.json().then(json => setErrors(json.errors))
           
          }
        })
      }
      console.log(errors[0])
      function handleDeleteProfileClick(e){
        e.preventDefault();
      
        if (window.confirm('Are you sure you want to delete your profile?')) {
            fetch(`http://localhost:3000/api/adopters/${id}`, { 
                method: 'DELETE',
              })
            deleteProfile(id);
            alert("Profile deleted successfully");
            navigate((`/`))
          } else {
            console.log('Thing was not saved to the database.');
          }
      }

   


    return (
        <div className='primary'>
            <h1>My Profile</h1>
        <Card variant="outlined" >  
       <p style={{color: "red"}}>  <br/> {errors[0]} <br/> <br/> {errors[1]} <br/>  <br/> {errors[2]}  </p>
            <div className="content"  >
            </div>
            <br/>
            <br/>
            <div className="extra content" >
              <ul>
              <Form.Input 
                label="Name:"
                placeholder={currentUser.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <br/>
              <br/>
             <Form.Input 
                label="Email:"
                placeholder={currentUser.email}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
                  <br/>
                  <Form.Input
                label="Phone Number:"
                placeholder={currentUser.phone}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
               <br/>
               <br/>
               <p>Press Save to update edited information</p>
               <Button  className="primary" variant="contained" onClick={handleEditProfileClick} disableElevation>
                  Save</Button>
                  <br/>
                  <br></br>
                  <br/>
                  <br/>
                <br/>
                  <Button onClick={handleDeleteProfileClick} variant="outlined" color="inherit"  disableElevation > 
                    Delete Account</Button> 
                </ul>
            </div>
          
        </Card>
        </div>
    )

}

export default Profile;