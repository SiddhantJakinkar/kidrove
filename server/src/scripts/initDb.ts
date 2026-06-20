import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Enquiry } from '../models/Enquiry'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kidrove'

async function initDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 15000 })
    console.log(`Connected to: ${mongoose.connection.db?.databaseName}`)

    const collections = await mongoose.connection.db!.listCollections().toArray()
    const exists = collections.some((c) => c.name === 'enquiries')

    if (!exists) {
      await Enquiry.createCollection()
      console.log('Created collection: enquiries')
    } else {
      console.log('Collection already exists: enquiries')
    }

    await Enquiry.syncIndexes()
    console.log('Indexes synced on enquiries collection')

    console.log('\nCollection schema (enquiries):')
    console.log('  - name   (String, required)')
    console.log('  - email  (String, required, indexed)')
    console.log('  - phone  (String, required)')
    console.log('  - createdAt / updatedAt (auto timestamps)')

    await mongoose.disconnect()
    console.log('\nDatabase setup complete.')
  } catch (error) {
    console.error('Setup failed:', error instanceof Error ? error.message : error)
    process.exit(1)
  }
}

initDatabase()
