
import Button from '@material-ui/core/Button';
import { Form } from "semantic-ui-react";
import { useState , useEffect} from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";

const Profile = ({ currentUser, updateProfile, deleteProfile , setCurrentUser}) => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
      });


console.log(currentUser)


      // function persistUserData(){
      //   fetch('http://localhost:3000/api/me').then((r) => {
      //     if (r.ok) {
      //       r.json().then((user) => 
      //       // setCurrentUser(user),
      //       setFormData({
      //         name: user.name,
      //         email: user.email,
      //         phone: user.phone
      //       }));
      //     }
      //   });
      // }
      

      // useEffect(()=>{
      //   setFormData("bob");
      // },[])

      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }


      function handleEditProfileClick(e) {
        e.preventDefault();
      
      const tempUser = currentUser;
      const {id} = tempUser;
      
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
            setErrors("")
            navigate((`/profile`))
          } else {
            res.json().then(json => setErrors(json.errors))
           
          }
        })
      }



      function handleDeleteProfileClick(e){
        e.preventDefault();

      const {id} = currentUser;

        if (window.confirm('Are you sure you want to delete your profile?')) {
            fetch(`http://localhost:3000/api/adopters/${id}`, { 
                method: 'DELETE',
              })
            deleteProfile(id);
            alert("Profile deleted successfully");
            setCurrentUser(false);
            navigate((`/`))
          } else {
            console.log('Thing was not saved to the database.');
          }
      }

   


    return (
        <div className='primary'>
            <h1>My Profile</h1>
        <Card variant="outlined" >  
        <h1 style={{color: "red"}}> <br/>  { errors[0]} <br/> {errors[1]} <br/>  {errors[2]}   <br/> </h1>
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