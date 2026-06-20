import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkshopHighlights from './components/WorkshopHighlights'
import LearningOutcomes from './components/LearningOutcomes'
import CurriculumTimeline from './components/CurriculumTimeline'
import WhyChoose from './components/WhyChoose'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkshopHighlights />
        <LearningOutcomes />
        <CurriculumTimeline />
        <WhyChoose />
        <Stats />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  )
}

export default App
