import Dexie, { type Table } from 'dexie'

export interface TestData {
  id: number
  message: string
  createdAt: number
}

class ShellyDatabase extends Dexie {
  testData!: Table<TestData, number>

  constructor() {
    super('ShellyDatabase')

    this.version(1).stores({
      testData: 'id, createdAt',
    })
  }
}

export const db = new ShellyDatabase()
