import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authThunk';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: ''
}

const LoginForm = () =>{



  const [userData, setUserData] = useState(initialState)
  const {email, password} = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate()
 

  const  handleInputChange = (e)=>{
const {name, value} = e.target
setUserData(prev=>({...prev, [name]: value }))
  }


const handleFormSubmit = async (e) =>{
e.preventDefault();
try {
  const data = await dispatch(loginThunk({ email, password})).unwrap()
  if(data.token){
    toast.success('Congradulation, wellcome to our site')
    navigate('/contacts')
  }
} catch (error) {
  toast.error('Error, do something else')
}
setUserData(initialState)
}

    return (
        <Paper elevation={4} sx={{
          width: '50ch', height: '30ch',  padding: '5ch', display: 'block', margin: '15ch   auto'
        }}>
          <h1 style={{textAlign:'center', color: 'blue'}} >PhoneBook</h1>
<Box onSubmit={handleFormSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch', display: 'flex', gap: '5ch', margin: '2ch auto'  },
      }}
      autoComplete="off"
    >
      <TextField onChange={handleInputChange} value={email}  required  type='email' name='email'  label="Email" variant="outlined" />
      <TextField onChange={handleInputChange} value={password} required type='password' name='password'  label="Password" variant="outlined" />
      <Button onClick={handleFormSubmit} variant="contained">Login</Button>

    </Box>
        </Paper>


    
    )
}

export default LoginForm;