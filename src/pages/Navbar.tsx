import { useNavigate } from 'react-router-dom'
import { AppBar, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'

function NavBar() {
  const navigate = useNavigate()

  return (
      <AppBar position='relative' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 4, borderRadius: 4 }} >
        <IconButton aria-label='home' onClick={() => navigate("/")} sx={{ padding: 0 }} >
            <HomeIcon sx={{ fontSize: 38, color: 'black' }} />
        </IconButton>
        <IconButton aria-label='settings' onClick={() => navigate("/settings")} sx={{ padding: 0 }} >
            <SettingsIcon sx={{ fontSize: 38, color: 'black' }} />
        </IconButton>
      </AppBar>
  )
}

export default NavBar
