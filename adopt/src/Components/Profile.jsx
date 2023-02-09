
import Button from '@material-ui/core/Button';
import { Form } from "semantic-ui-react";
import { useState } from 'react';
import Card from '@mui/material/Card';


const Profile = () => {

    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
      });

      const myStyles = {

      }


    return (
        <div className='primary' >
        <Card variant="outlined">  
       <p style={{color: "red"}}>  {errors} </p>
            <div className="content" >
            </div>
            <h1>Name:</h1>
            <div className="extra content" >
              <ul>
             <Form.Input
                label="Email:"
                // placeholder={email}
                name="email"
                value={formData.email}
              />
                  <br/>
                  <Form.Input
                label="Phone Number:"
                // placeholder={phone}
                name="phone"
                value={formData.phone}
              />
                <br></br>
                <Form.Input
                label="Password:"
                // placeholder={password}
                name="password"
                value={formData.password}
              />
               <br/>
               <br/>
               <Button  className="primary" variant="contained"  disableElevation>
                  Save</Button>
                  <br/>
                  <br></br>
                </ul>
            </div>
          
        </Card>
        </div>
    )

}

export default Profile;