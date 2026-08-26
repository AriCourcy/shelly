import { useEffect, useState } from 'react'
import { getBookCover, saveBookCover } from './services/covers'
import { searchBooks } from './services/books'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './pages/navBar'
import { Icon } from '@mdi/react'
import { mdiHome } from '@mdi/js'

function App() {
  const [books, setBooks] = useState([])

  async function loadBooks(e) {
    
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const query = formData.get('query')

    searchBooks(query).then(result => {
      setBooks(result)
    })

  }

  return (
    <main style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
      <BrowserRouter basename="/shelly">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <NavBar></NavBar>
      </BrowserRouter>
    </main>
  )
}

export default App
