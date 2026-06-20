import { motion } from 'framer-motion'
import { learningOutcomes } from '../data/workshop'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function LearningOutcomes() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Learning Outcomes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            By the end of this workshop, your child will have built real skills
            and a portfolio-worthy project
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {learningOutcomes.map((outcome) => (
            <motion.div
              key={outcome.title}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="group rounded-[24px] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-transform group-hover:scale-110">
                <outcome.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
