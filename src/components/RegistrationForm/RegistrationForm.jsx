import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


const RegistranionForm = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const  handleInputChange = (e)=>{
const {name} = e.target
switch (name) {
    case 'name':
        setName(e.target.value)
        break;
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
const data ={ name, email, password}
console.log(data)
setEmail('');
setName('')
setPassword('')

}

    return (
        <Paper elevation={4} sx={{
          width: '50ch', height: '40ch',  padding: '5ch', display: 'block', margin: '15ch   auto', alignItems: 'center'
        }}>
                    <h1 style={{textAlign:'center', color: 'blue'}} >PhoneBook</h1>
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
      <Button onClick={handleFormSubmit} variant="contained">Register</Button>

    </Box>
        </Paper>


    
    )
}

export default RegistranionForm;
