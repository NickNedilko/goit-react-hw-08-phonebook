import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/auth-selectors';


const UserMenu = ()=>{
  const userName = useSelector(selectUserName)
    return(
<div style={{display: "flex", gap: '15px'}}>
<Avatar alt="nikolayNS" src="/static/images/avatar/1.jpg" />
  <p>{userName}</p>
  <Button sx={{ color: 'white'}} variant="text"><LogoutIcon/></Button>
</div>
    )
}
export default UserMenu;