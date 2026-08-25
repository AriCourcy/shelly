import { useEffect, useState } from 'react'
import { getBookCover, saveBookCover } from './services/covers'
import { searchBooks } from './services/books'

function App() {
  const [books, setBooks] = useState([])

  async function loadBooks(e) {
    
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const query = formData.get("query")

    searchBooks(query).then(result => {
      setBooks({...books, result})
    })

  }

  return (
    <main style={{ padding: 24 }}>
      <form onSubmit={loadBooks}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </main>
  )
}

export default App
