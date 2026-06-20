import { motion } from 'framer-motion'
import { curriculum } from '../data/workshop'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function CurriculumTimeline() {
  return (
    <section id="curriculum" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Curriculum Timeline
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            A structured 4-week journey from AI basics to your final robot build
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2 sm:-translate-x-px"
            aria-hidden="true"
          />

          {curriculum.map((week, index) => (
            <motion.div
              key={week.week}
              variants={fadeUp}
              className={`relative mb-12 flex items-start gap-6 sm:gap-0 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className={`hidden sm:block sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Week {week.week}
                </span>
                <h3 className="mt-1 text-xl font-bold text-text-primary">{week.title}</h3>
              </div>

              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-primary/30 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                {week.week}
              </div>

              <div className={`flex-1 sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'}`}>
                <div className="sm:hidden">
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Week {week.week}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-text-primary">{week.title}</h3>
                </div>
                <p className="mt-3 rounded-[24px] border border-slate-100 bg-white p-6 text-sm leading-relaxed text-text-secondary shadow-sm">
                  {week.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
