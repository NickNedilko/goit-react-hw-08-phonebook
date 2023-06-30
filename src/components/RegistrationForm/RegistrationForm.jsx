import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { signUpThunk } from 'redux/auth/authThunk';
import { Link } from '@mui/material';
import { toast } from 'react-toastify';


const initialState = {
  name: '',
  email: '',
  password: ''
}

const RegistranionForm = () =>{
  const [userData, setUserData] = useState(initialState)
  const {name, email, password} = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate()
 

  const  handleInputChange = (e)=>{
const {name, value} = e.target
setUserData(prev=>({...prev, [name]: value }))
  }

const handleFormSubmit = async (e) =>{
e.preventDefault();
try {
  const data = await dispatch(signUpThunk({name, email, password})).unwrap()
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
          width: '50ch', height: '42ch',  padding: '5ch', display: 'block', margin: '15ch   auto', alignItems: 'center'
        }}>
                    <h1 style={{textAlign:'center', color: 'blue'}}>PhoneBook</h1>
          <p style={{textAlign:'center', color: 'blue'}}>Create a new account</p>
<Box onSubmit={handleFormSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch', display: 'flex', gap: '5ch', margin: '2ch auto'  },
      }}
      autoComplete="off"
    >
      <TextField sx={{marginBottom: '5ch'}} onChange={handleInputChange} value={name} type='text' name='name'  label="Name" variant="outlined" />
      <TextField onChange={handleInputChange} value={email} pattern=".+@globex\.com" size="30" required id="email" type='email' name='email'  label="Email" variant="outlined" />
      <TextField onChange={handleInputChange} value={password} type='password' name='password'  label="Password" variant="outlined" />

    <Link sx={{cursor: 'pointer', justifyContent: 'center'}} children='Already has account?' href='login'/>
      <Button onClick={handleFormSubmit} variant="contained">Sign up</Button>
    </Box>
        </Paper>


    
    )
}


export default RegistranionForm;
