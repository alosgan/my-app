import { useState } from 'react'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import './styles/App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [isGeneralInfoSubmitted, setIsGeneralInfoSubmitted] = useState(false)
  const [education, setEducation] = useState({
    school: '',
    title: '',
    date: '',
  })
  const [isEducationSubmitted, setIsEducationSubmitted] = useState(false)
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  })
  const [isExperienceSubmitted, setIsExperienceSubmitted] = useState(false)

  return (
    <main className="app">
      <section className="form-panel">
        <GeneralInfoForm
          info={generalInfo}
          setInfo={setGeneralInfo}
          isSubmitted={isGeneralInfoSubmitted}
          setIsSubmitted={setIsGeneralInfoSubmitted}
        />
        <EducationForm
          info={education}
          setInfo={setEducation}
          isSubmitted={isEducationSubmitted}
          setIsSubmitted={setIsEducationSubmitted}
        />
        <ExperienceForm
          info={experience}
          setInfo={setExperience}
          isSubmitted={isExperienceSubmitted}
          setIsSubmitted={setIsExperienceSubmitted}
        />
      </section>

      <section className="cv-preview">
        <h1>CV Preview</h1>
        {isGeneralInfoSubmitted && (
          <section>
            <h2>{generalInfo.name}</h2>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
          </section>
        )}
        {isEducationSubmitted && (
          <section>
            <h2>Education</h2>
            <h3>{education.title}</h3>
            <p>{education.school}</p>
            <p>{education.date}</p>
          </section>
        )}
        {isExperienceSubmitted && (
          <section>
            <h2>Experience</h2>
            <h3>{experience.position}</h3>
            <p>{experience.company}</p>
            <p>{experience.startDate} - {experience.endDate}</p>
            <p>{experience.responsibilities}</p>
          </section>
        )}
      </section>
    </main>
  )
}

export default App