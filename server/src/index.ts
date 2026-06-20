import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import enquiryRouter from './routes/enquiry'
import { connectDatabase, isDatabaseConnected } from './config/database'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const FRONTEND_URL = process.env.FRONTEND_URL

app.use(
  cors({
    origin: FRONTEND_URL ? [FRONTEND_URL] : true,
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    mongoConnected: isDatabaseConnected(),
    database: mongoose.connection.db?.databaseName ?? null,
    timestamp: new Date().toISOString(),
  })
})

app.use('/api/enquiry', enquiryRouter)

async function startServer() {
  const connected = await connectDatabase()

  if (!connected) {
    console.warn('Running without database — enquiries will fail to save until MongoDB is connected')
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

startServer()
