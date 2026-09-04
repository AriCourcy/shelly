import { useState } from 'react'
import { searchBooks } from '../services/books'
import { useTranslation } from 'react-i18next'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

export default function Search() {

  const { t, i18n } = useTranslation()

  const [books, setBooks] = useState([])

  const [query, setQuery] = useState('')

  async function loadBooks(e) {
    
    e.preventDefault()

    const query = e.target.query.value

        if (typeof query !== 'string' || !query.trim()) {
          return
        }

    searchBooks(query).then(result => {
      setBooks(result)
    })

  }

  return (
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', padding: 24 }}>
      <form onSubmit={loadBooks} style={{ display: 'flex', gap: 8 }}>
        <TextField
          label='Find a book'
          name='query'
          fullWidth
        />

        <Button size='small' type='submit' variant='contained' endIcon={<SendIcon />} sx={{ textTransform: 'capitalize' }}>
          { t('search') }
        </Button>
     </form>

      <div style={{ display: 'flex', flexGrow: 1 }}>
            <ul>        
              {books.map((book, index) => (<li key={book.id ?? index}>{book.title}</li>))}
            </ul>
      </div>
    </div>
  )
}

