import { useEffect, useState } from 'react'
import { searchBooks } from '../../services/books'

export default function Home() {
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
    <form onSubmit={loadBooks}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  )
}

