import { Router, Request, Response } from 'express'
import { validateEnquiry } from '../middleware/validateEnquiry'
import { Enquiry } from '../models/Enquiry'
import { isDatabaseConnected } from '../config/database'

const router = Router()

router.post('/', validateEnquiry, async (req: Request, res: Response) => {
  try {
    if (!isDatabaseConnected()) {
      res.status(503).json({
        success: false,
        message: 'Database unavailable. Please try again later.',
      })
      return
    }

    const { name, email, phone } = req.body
    const enquiry = await Enquiry.create({ name, email, phone })

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: {
        id: enquiry._id,
        name: enquiry.name,
        email: enquiry.email,
        phone: enquiry.phone,
        createdAt: enquiry.createdAt,
      },
    })
  } catch (error) {
    console.error('Enquiry submission error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

router.get('/', async (_req: Request, res: Response) => {
  try {
    if (!isDatabaseConnected()) {
      res.status(503).json({
        success: false,
        message: 'Database unavailable',
      })
      return
    }

    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 })
      .select('name email phone createdAt')

    res.json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    })
  } catch (error) {
    console.error('Fetch enquiries error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

export default router
