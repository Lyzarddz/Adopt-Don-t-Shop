import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Login = ({ loginUser, loadPets }) => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:'',
        password:''
    })

    const {name, password} = formData;

    function handleSubmit(e){
        e.preventDefault();
    
        const user = {
          name,
          password
        }
    
        fetch('http://localhost:3000/api/login', {
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
                  loadPets()
                  navigate((`/pets/`))
              })
          } else {
            res.json().then(json => setErrors(json.errors))
          }
      })
    }  

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
return(
          <div className='primary'>
      <h1 style={{color: "red"}}>{errors}</h1>
      <h1> Log In </h1> 
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="name">Username: </label>
            <input type="text" name="name" id="name" value={name} onChange={ handleChange }/>
          </div>
          <div>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" value={password} onChange={ handleChange }/>
        </div> 
          <br></br>
          <input type="submit" value="Login" className='btn'/>
        </form>
      </div>
    )

}

export default Login;