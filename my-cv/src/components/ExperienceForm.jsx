import '../styles/Experience.css'

function ExperienceForm({ info, setInfo, isSubmitted, setIsSubmitted }) {
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
      <section className="experience">
        <h2>{info.position}</h2>
        <p>{info.company}</p>
        <p>{info.startDate} - {info.endDate}</p>
        <p>{info.responsibilities}</p>
        <button type="button" onClick={() => setIsSubmitted(false)}>
          Edit
        </button>
      </section>
    )
  }

  return (
    <form className="experience" onSubmit={handleSubmit}>
      <h2>Practical Experience</h2>
      <label>
        Company name
        <input name="company" value={info.company} onChange={handleChange} required />
      </label>
      <label>
        Position title
        <input name="position" value={info.position} onChange={handleChange} required />
      </label>
      <label>
        Main responsibilities
        <textarea
          name="responsibilities"
          value={info.responsibilities}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date from
        <input
          name="startDate"
          type="date"
          value={info.startDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date until
        <input
          name="endDate"
          type="date"
          value={info.endDate}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ExperienceForm