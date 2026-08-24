import { useEffect, useState } from 'react'
import { getBookCover, saveBookCover } from './services/covers'

const testBookId = 'cover-test'

function App() {
  const [coverUrl, setCoverUrl] = useState<string | null>(null)
  const [status, setStatus] = useState('Checking local database...')

  useEffect(() => {
    loadCover()
  }, [])

  async function loadCover() {
    const cover = await getBookCover(testBookId)

    if (!cover) {
      setStatus('No local cover yet.')
      return
    }

    setCoverUrl(URL.createObjectURL(cover.blob))
    setStatus('Cover loaded from local database.')
  }

  async function downloadCover() {
    setStatus('Downloading cover...')

    const url =
      'https://covers.openlibrary.org/b/isbn/9780439554930-M.jpg'

    await saveBookCover(testBookId, url)

    await loadCover()
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Shelly</h1>

      <h2>Cover storage test part 2</h2>

      <button onClick={downloadCover}>
        Download and save cover
      </button>

      <p>{status}</p>

      {coverUrl && (
        <img
          src={coverUrl}
          alt="Test book cover"
          style={{ width: 180 }}
        />
      )}
    </main>
  )
}

export default App
