import { useState } from 'react'
import type { FormEvent } from "react"
import { searchBooks } from '../services/books'
import { type Book } from '../db'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])

  async function loadBooks(e: FormEvent<HTMLFormElement>) {
    
    e.preventDefault()

    //const form = e.target
    const formData = new FormData(e.currentTarget)
    const query = formData.get('query')

        if (typeof query !== 'string' || !query.trim()) {
          return
        }

    searchBooks(query).then(result => {
      setBooks(result)
    })

  }

  return (
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', padding: 24 }}>
      <form onSubmit={loadBooks} style={{ display: 'flex',  }}>
        <input name='query' />
        <button type='submit'>Search</button>
      </form>
      <div style={{ display: 'flex', flexGrow: 1 }}>
            <ul>        
              {books.map((book, index) => (<li key={book.id ?? index}>{book.title}</li>))}
            </ul>
      </div>
    </div>
  )
}

