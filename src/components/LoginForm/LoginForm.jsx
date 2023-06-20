import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


const LoginForm = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const  handleInputChange = (e)=>{
const {name} = e.target
switch (name) {
  
        case 'email':
            setEmail(e.target.value)
            break;
            case 'password':
                setPassword(e.target.value)
                break;
    default:
        break;
}
  }

const handleFormSubmit = (e) =>{
e.preventDefault();
const data ={  email, password}
console.log(data)
setEmail('');
setPassword('')

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
      <Button onClick={handleFormSubmit} variant="contained">Sing up</Button>

    </Box>
        </Paper>


    
    )
}

export default LoginForm;