import '../styles/Education.css'

function EducationForm({ info, setInfo, isSubmitted, setIsSubmitted }) {
  function handleChange(event) {
    const { name, value } = event.target
    setInfo((currentInfo) => ({
      ...currentInfo,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="education">
        <h2>{info.title}</h2>
        <p>{info.school}</p>
        <p>{info.date}</p>
        <button type="button" onClick={() => setIsSubmitted(false)}>
          Edit
        </button>
      </section>
    )
  }

  return (
    <form className="education" onSubmit={handleSubmit}>
      <h2>Education</h2>
      <label>
        School name
        <input name="school" value={info.school} onChange={handleChange} required />
      </label>
      <label>
        Title of study
        <input name="title" value={info.title} onChange={handleChange} required />
      </label>
      <label>
        Date of study
        <input name="date" value={info.date} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default EducationForm