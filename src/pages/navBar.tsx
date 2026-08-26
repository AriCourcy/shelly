import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './home'
import { Icon } from '@mdi/react'
import { mdiHome } from '@mdi/js'

function NavBar() {
  const navigate = useNavigate()

  return (
      <div style={{ backgroundColor: '#a6ca93', display: 'flex', justifyContent: 'space-around', borderRadius: 4 }}>
        <button onClick={() => navigate("/")} style={{ backgroundColor: 'transparent', borderWidth: 0 }}>
          <Icon path={mdiHome} size={1.5} color='black' />
        </button>
      </div>
  )
}

export default NavBar
