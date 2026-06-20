import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import enquiryRouter from './routes/enquiry'
import { connectDatabase, isDatabaseConnected } from './config/database'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const allowedOrigins = new Set([
  'https://kidrove-one.vercel.app',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
])

app.use(
  cors({
    origin(origin, callback) {
      if (
        !origin ||
        allowedOrigins.has(origin) ||
        origin.endsWith('.vercel.app') ||
        origin.startsWith('http://localhost:')
      ) {
        callback(null, true)
        return
      }

      callback(null, false)
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
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
