import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { fadeUp, slideRight } from '../utils/animations'
import { workshopDetails } from '../data/workshop'
import HeroIllustration from './HeroIllustration'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-white to-secondary/[0.06]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            {workshopDetails.title}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
          >
            Build Your First{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              AI Robot
            </span>{' '}
            This Summer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary lg:mx-0 mx-auto"
          >
            Learn Artificial Intelligence, Robotics, Coding and Automation through
            hands-on projects designed for young innovators.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center"
          >
            <a
              href="#register"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Enroll Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-text-primary transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <BookOpen className="h-5 w-5 text-primary" />
              View Curriculum
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  )
}
