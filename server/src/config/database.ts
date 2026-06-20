import mongoose from 'mongoose'
import { Enquiry } from '../models/Enquiry'

export async function connectDatabase(): Promise<boolean> {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/kidrove'
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    })

    const dbName = mongoose.connection.db?.databaseName
    console.log(`Connected to MongoDB — database: ${dbName}`)

    await initCollections()
    return true
  } catch (error) {
    console.error('MongoDB connection failed:', error instanceof Error ? error.message : error)
    return false
  }
}

async function initCollections(): Promise<void> {
  const collections = await mongoose.connection.db!.listCollections().toArray()
  const exists = collections.some((c) => c.name === 'enquiries')

  if (!exists) {
    await Enquiry.createCollection()
    console.log('Created collection: enquiries')
  } else {
    console.log('Collection already exists: enquiries')
  }

  await Enquiry.syncIndexes()
  console.log('Enquiry indexes synced')
}

export function isDatabaseConnected(): boolean {
  return mongoose.connection.readyState === 1
}
