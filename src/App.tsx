import { useEffect, useState } from 'react'
import { db, type TestData } from './db'

function App() {
  const [data, setData] = useState<TestData | null>(null)

  useEffect(() => {
    db.testData
      .orderBy('createdAt')
      .last()
      .then((result) => {
        setData(result ?? null)
      })
  }, [])

  async function saveTestData() {
    const newData: TestData = {
      id: 1,
      message: `Saved at ${new Date().toLocaleString()}`,
      createdAt: Date.now(),
    }

    await db.testData.put(newData)
    setData(newData)
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Shelly</h1>

      <h2>Local database test</h2>

      <button onClick={saveTestData}>
        Save test data
      </button>

      <p>
        {data
          ? `Saved value: ${data.message}`
          : 'No data saved yet.'}
      </p>
    </main>
  )
}

export default App
