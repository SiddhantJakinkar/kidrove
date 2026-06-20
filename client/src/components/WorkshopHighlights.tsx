import { motion } from 'framer-motion'
import { highlights } from '../data/workshop'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function WorkshopHighlights() {
  return (
    <section id="workshop" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Workshop Highlights
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Everything you need to know at a glance
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-text-secondary">{item.label}</p>
              <p className="mt-1 text-xl font-bold text-text-primary">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
