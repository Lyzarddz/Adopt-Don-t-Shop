import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:''
  })


const {name, email, password} = formData;

return ( 
    <div className='primary'>
      <h1>{errors}</h1>
    <h1> Create Account </h1> 
    <form >
      <div>
        <label htmlFor="name ">Username: </label>
        <input type="text" name="name" id="name" value={name}  />
        </div>   
        <div>
        <label htmlFor="name ">Email: </label>
        <input type="text" name="email" id="email" value={email}  />
        </div> 
        <div>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" value={password}/>
        </div> 
        <br></br>
        <input type="submit" value="Create Account"/>
    </form>
    </div>
  )

}

export default Signup;