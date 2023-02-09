import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Login = () => {

    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        name:'',
        password:''
    })

    const {name, password} = formData;
    
return(
          <div className='primary'>
      <h1>{errors}</h1>
      <h1> Log In </h1> 
        <form >
          <div>
            <label htmlFor="name">Username: </label>
            <input type="text" name="name" id="name" value={name} />
          </div>
          <div>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" value={password} />
        </div> 
          <br></br>
          <input type="submit" value="Login" />
        </form>
      </div>
    )

}

export default Login;