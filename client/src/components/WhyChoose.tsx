import { motion } from 'framer-motion'
import { features } from '../data/workshop'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Why Choose This Workshop
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Designed for young minds, trusted by hundreds of parents
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`rounded-[24px] border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/5 ${
                index === 0 ? 'sm:col-span-2 sm:flex sm:items-center sm:gap-8 bg-gradient-to-br from-primary/5 to-secondary/5' : ''
              }`}
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ${index === 0 ? 'sm:mb-0 sm:shrink-0' : ''}`}>
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
