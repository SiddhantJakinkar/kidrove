import {
  Brain,
  Bot,
  Blocks,
  LineChart,
  Lightbulb,
  Presentation,
  Users,
  Wrench,
  GraduationCap,
  Award,
  Calendar,
  Clock,
  Monitor,
  IndianRupee,
  type LucideIcon,
} from 'lucide-react'

export const workshopDetails = {
  title: 'AI & Robotics Summer Workshop',
  ageGroup: '8–14 Years',
  duration: '4 Weeks',
  mode: 'Online',
  fee: '₹2,999',
  startDate: '15 July 2026',
}

export interface Highlight {
  label: string
  value: string
  icon: LucideIcon
}

export const highlights: Highlight[] = [
  { label: 'Age Group', value: workshopDetails.ageGroup, icon: Users },
  { label: 'Duration', value: workshopDetails.duration, icon: Clock },
  { label: 'Mode', value: workshopDetails.mode, icon: Monitor },
  { label: 'Fee', value: workshopDetails.fee, icon: IndianRupee },
  { label: 'Start Date', value: workshopDetails.startDate, icon: Calendar },
]

export interface Outcome {
  title: string
  description: string
  icon: LucideIcon
}

export const learningOutcomes: Outcome[] = [
  {
    title: 'Understand AI fundamentals',
    description: 'Grasp core concepts of artificial intelligence through kid-friendly explanations and interactive demos.',
    icon: Brain,
  },
  {
    title: 'Build robotics projects',
    description: 'Design and assemble virtual and physical robot prototypes using guided step-by-step projects.',
    icon: Bot,
  },
  {
    title: 'Learn block-based programming',
    description: 'Master visual coding blocks to control robots, sensors, and automated systems with confidence.',
    icon: Blocks,
  },
  {
    title: 'Explore machine learning concepts',
    description: 'Train simple ML models and see how computers learn from data to make smart decisions.',
    icon: LineChart,
  },
  {
    title: 'Improve problem-solving skills',
    description: 'Tackle real-world STEM challenges that build logical thinking and creative engineering skills.',
    icon: Lightbulb,
  },
  {
    title: 'Present a final capstone project',
    description: 'Showcase your own AI robot build to mentors and peers in a celebratory demo day.',
    icon: Presentation,
  },
]

export interface Week {
  week: number
  title: string
  description: string
}

export const curriculum: Week[] = [
  {
    week: 1,
    title: 'Introduction to AI',
    description: 'Discover what AI is, how machines think, and explore fun AI applications in everyday life.',
  },
  {
    week: 2,
    title: 'Robotics Fundamentals',
    description: 'Learn about sensors, motors, and controllers while building your first robotic systems.',
  },
  {
    week: 3,
    title: 'Machine Learning Projects',
    description: 'Create hands-on ML projects including image recognition and smart decision-making bots.',
  },
  {
    week: 4,
    title: 'Final AI Robot Build',
    description: 'Combine everything into a capstone AI robot project and present it to the class.',
  },
]

export interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export const features: Feature[] = [
  {
    title: 'Expert Mentors',
    description: 'Learn from experienced STEM educators who specialize in teaching kids.',
    icon: GraduationCap,
  },
  {
    title: 'Hands-on Projects',
    description: 'Every session includes practical building and coding activities, not just lectures.',
    icon: Wrench,
  },
  {
    title: 'Small Batch Learning',
    description: 'Limited seats ensure personalized attention and interactive live sessions.',
    icon: Users,
  },
  {
    title: 'Certificate of Completion',
    description: 'Receive an official Kidrove certificate to showcase your AI & robotics skills.',
    icon: Award,
  },
]

export interface Stat {
  value: string
  label: string
  numericValue?: number
  suffix?: string
}

export const stats: Stat[] = [
  { value: '500+', label: 'Students', numericValue: 500, suffix: '+' },
  { value: '95%', label: 'Satisfaction', numericValue: 95, suffix: '%' },
  { value: '50+', label: 'Projects Built', numericValue: 50, suffix: '+' },
  { value: '4', label: 'Week Intensive Program', numericValue: 4, suffix: '' },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: 'Do students need coding experience?',
    answer:
      'No prior coding experience is required. We start from the basics with block-based programming and gradually introduce concepts in a fun, age-appropriate way. Our mentors adapt to each student\'s pace.',
  },
  {
    question: 'What software is required?',
    answer:
      'Students need a laptop or tablet with a stable internet connection. We provide access to free, browser-based coding platforms and will share a simple setup guide before the workshop begins. No expensive software purchases needed.',
  },
  {
    question: 'Will recordings be available?',
    answer:
      'Yes! All live sessions are recorded and shared within 24 hours. Students can revisit lessons anytime during the 4-week program and for 30 days after completion.',
  },
]

export const navLinks = [
  { label: 'Workshop', href: '#workshop' },
  { label: 'Courses', href: '#curriculum' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
