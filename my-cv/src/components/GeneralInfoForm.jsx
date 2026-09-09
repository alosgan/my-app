import '../styles/GeneralInfo.css'

function GeneralInfoForm({ info, setInfo, isSubmitted, setIsSubmitted }) {
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
      <section className="general-info">
        <h2>{info.name}</h2>
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone}</p>

        <button type="button" onClick={() => setIsSubmitted(false)}>
          Edit
        </button>
      </section>
    )
  }

  return (
    <form className="general-info" onSubmit={handleSubmit}>
      <h2>General Information</h2>

      <label>
        Name
        <input name="name" value={info.name} onChange={handleChange} required />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={info.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone
        <input name="phone" value={info.phone} onChange={handleChange} required />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}

export default GeneralInfoForm