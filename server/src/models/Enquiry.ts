import mongoose, { Schema, Document } from 'mongoose'

export interface IEnquiry extends Document {
  name: string
  email: string
  phone: string
  createdAt: Date
  updatedAt: Date
}

const enquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
      match: [/^[6-9]\d{9}$/, 'Phone must be a valid 10-digit Indian number'],
    },
  },
  {
    timestamps: true,
    collection: 'enquiries',
  }
)

enquirySchema.index({ email: 1 })
enquirySchema.index({ createdAt: -1 })

export const Enquiry = mongoose.model<IEnquiry>('Enquiry', enquirySchema)
