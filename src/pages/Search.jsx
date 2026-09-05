import { useState } from 'react'
import { searchBooks } from '../services/books'
import { useTranslation } from 'react-i18next'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box'

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
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', padding: 24, gap: 8 }}>
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

      <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', gap: 8, maxHeight: '100vh', overflowY: 'auto' }}>
        {
          books.map((book, index) => (
            <Box key={index} sx={{ display: 'flex', borderRadius: 4, borderStyle: 'solid', borderWidth: 2, borderColor: 'primary.main', padding: 1, gap: 2 }}>
              <Box>
                <img style={{ borderRadius: 4 }} src={book.coverUrl} />
              </Box>
              <Box sx={{ display: 'flex', minWidth: 0, flexDirection: 'column' }}>
                <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%', overflow: 'hidden', fontSize: '20px', alignSelf: 'start' }}>{book.title}</p>
                <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%', overflow: 'hidden', alignSelf: 'start' }}>{book.author}</p>
              </Box>
            </Box>
          ))
        }

      </div>
    </div>
  )
}

