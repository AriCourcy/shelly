import { useState } from 'react'
import { searchBooks } from '../services/books'
import { useTranslation } from 'react-i18next'

export default function Home() {

  const { t, i18n } = useTranslation()

  const [books, setBooks] = useState([])

  async function loadBooks(e) {
    
    e.preventDefault()

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
        <button type='submit'>{t('search')}</button>
      </form>
      <div style={{ display: 'flex', flexGrow: 1 }}>
            <ul>        
              {books.map((book, index) => (<li key={book.id ?? index}>{book.title}</li>))}
            </ul>
      </div>
    </div>
  )
}

