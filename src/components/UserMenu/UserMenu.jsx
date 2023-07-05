import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authThunk';
import { selectorUserName } from 'redux/profile/selectors';


const UserMenu = ()=>{
  const dispatch = useDispatch()
  const userName = useSelector(selectorUserName)
  console.log(userName)
    return(
<div style={{display: "flex", gap: '15px'}}>
<Avatar alt="nikolayNS" src="/static/images/avatar/1.jpg" />
  <p>Welcome, {userName}</p>
  <Button onClick={()=>dispatch(logOutThunk())} sx={{ color: 'white'}} variant="text"><LogoutIcon/></Button>
</div>
    )
}
export default UserMenu;