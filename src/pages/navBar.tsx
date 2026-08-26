import { useNavigate } from 'react-router-dom'
import { AppBar, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

function NavBar() {
  const navigate = useNavigate()

  return (
      <AppBar position='relative' >
        <IconButton aria-label="home" onClick={() => navigate("/")} sx={{ padding: 0 }} >
            <HomeIcon sx={{ fontSize: 38, color: 'black' }} />
        </IconButton>
      </AppBar>
  )
}

export default NavBar
