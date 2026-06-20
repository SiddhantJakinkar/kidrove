import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import enquiryRouter from './routes/enquiry'
import { connectDatabase, isDatabaseConnected } from './config/database'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const isProduction = process.env.NODE_ENV === 'production'

function getAllowedOrigins(): Set<string> {
  const origins = new Set<string>()

  if (process.env.FRONTEND_URL) {
    origins.add(process.env.FRONTEND_URL.replace(/\/$/, ''))
  }

  if (process.env.ALLOWED_ORIGINS) {
    process.env.ALLOWED_ORIGINS.split(',')
      .map((origin) => origin.trim().replace(/\/$/, ''))
      .filter(Boolean)
      .forEach((origin) => origins.add(origin))
  }

  if (!isProduction) {
    origins.add('http://localhost:5173')
    origins.add('http://127.0.0.1:5173')
  }

  return origins
}

const allowedOrigins = getAllowedOrigins()

if (isProduction && allowedOrigins.size === 0) {
  console.warn('FRONTEND_URL is not set — browser requests from your frontend may be blocked by CORS')
}

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true)
        return
      }

      if (allowedOrigins.has(origin)) {
        callback(null, true)
        return
      }

      callback(new Error('Not allowed by CORS'))
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
