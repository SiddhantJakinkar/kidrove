import { Router, Request, Response } from 'express'
import mongoose from 'mongoose'
import { validateEnquiry } from '../middleware/validateEnquiry'
import { Enquiry } from '../models/Enquiry'

const router = Router()
const memoryStore: Array<{ name: string; email: string; phone: string; createdAt: Date }> = []

router.post('/', validateEnquiry, async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body

    if (mongoose.connection.readyState === 1) {
      await Enquiry.create({ name, email, phone })
    } else {
      memoryStore.push({ name, email, phone, createdAt: new Date() })
      console.log('Enquiry stored in memory (MongoDB unavailable):', { name, email, phone })
    }

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully',
    })
  } catch (error) {
    console.error('Enquiry submission error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

export default router
