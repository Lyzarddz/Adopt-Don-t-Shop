import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({loginUser}) => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
      name:'',
      email:'',
      phone:'',
      password:''
  })


const {name, email, phone, password} = formData;

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e){
    e.preventDefault();

    const user = {
      name,
      email,
      phone,
      password
    }

    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    }) 
    .then(res => {
      if(res.ok){
          res.json().then(user => {
            loginUser(user)
            navigate((`/pets`))
          })
      } else {
        res.json().then(json => setErrors(json.errors))
        console.log(errors)
      }
  })
}




return ( 
    <div className='primary'>
      <h1>{errors}</h1>
    <h1> Create Account </h1> 
    <form >
      <div>
        <label htmlFor="name ">Username: </label>
        <input type="text" name="name" id="name" value={name}  onChange={handleChange} />
        </div>   
        <div>
        <label htmlFor="name ">Email: </label>
        <input type="text" name="email" id="email" value={email}  onChange={handleChange} />
        </div> 
        <div>
        <label htmlFor="name ">Phone: </label>
        <input type="text" name="phone" id="phone" value={phone}  onChange={handleChange} />
        </div> 
        <div>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" value={password} onChange={handleChange} />
        </div> 
        <br></br>
        <input type="submit" value="Create Account"/>
    </form>
    </div>
  )

}

export default Signup;