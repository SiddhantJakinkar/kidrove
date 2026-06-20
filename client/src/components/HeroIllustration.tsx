import { motion } from 'framer-motion'
import { Sparkles, Code2, Cpu } from 'lucide-react'

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative overflow-hidden rounded-[24px] border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-2xl shadow-primary/10"
      >
        <svg
          viewBox="0 0 400 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
        >
          <rect x="120" y="60" width="160" height="140" rx="20" fill="#4F46E5" fillOpacity="0.1" stroke="#4F46E5" strokeWidth="2" />
          <rect x="140" y="85" width="50" height="35" rx="8" fill="#06B6D4" fillOpacity="0.3" />
          <rect x="210" y="85" width="50" height="35" rx="8" fill="#06B6D4" fillOpacity="0.3" />
          <circle cx="165" cy="102" r="8" fill="#4F46E5" />
          <circle cx="235" cy="102" r="8" fill="#4F46E5" />
          <rect x="170" y="140" width="60" height="8" rx="4" fill="#F59E0B" />
          <rect x="155" y="200" width="90" height="60" rx="12" fill="#4F46E5" />
          <rect x="100" y="260" width="40" height="80" rx="8" fill="#64748B" fillOpacity="0.3" />
          <rect x="260" y="260" width="40" height="80" rx="8" fill="#64748B" fillOpacity="0.3" />
          <circle cx="200" cy="45" r="12" fill="#F59E0B" />
          <line x1="200" y1="57" x2="200" y2="60" stroke="#64748B" strokeWidth="3" />
          <rect x="30" y="120" width="70" height="50" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
          <rect x="40" y="135" width="30" height="4" rx="2" fill="#4F46E5" fillOpacity="0.5" />
          <rect x="40" y="145" width="50" height="4" rx="2" fill="#06B6D4" fillOpacity="0.5" />
          <rect x="40" y="155" width="40" height="4" rx="2" fill="#F59E0B" fillOpacity="0.5" />
          <rect x="300" y="100" width="70" height="70" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
          <circle cx="335" cy="125" r="15" fill="#06B6D4" fillOpacity="0.2" stroke="#06B6D4" strokeWidth="2" />
          <path d="M328 125 L333 130 L343 118" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="310" y="148" width="50" height="4" rx="2" fill="#64748B" fillOpacity="0.3" />
          <rect x="310" y="158" width="35" height="4" rx="2" fill="#64748B" fillOpacity="0.3" />
        </svg>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-6 right-6 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-lg"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-xs font-semibold text-text-primary">AI Powered</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-8 left-4 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-lg"
        >
          <Code2 className="h-4 w-4 text-secondary" />
          <span className="text-xs font-semibold text-text-primary">Live Coding</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-16 right-8 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-lg"
        >
          <Cpu className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-text-primary">Robotics</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
