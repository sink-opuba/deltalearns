import React, { useState } from "react"
import { navigate } from "gatsby"
import "./RegistrationForm.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const RegistrationForm = () => {
  const [selectedRadioOption, setSelectedRadioOption] = useState({
    selectedOption: "option1",
  })

  const handleRadioOptionChange = changeEvent => {
    setSelectedRadioOption({ selectedOption: changeEvent.target.value })
  }

  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      className="registration-form"
      name="Registration"
      data-netlify="true"
      method="post"
      action="/payment/"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="NewsLetter" />
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <h2 className="reg-form__heading">DeltaLEARNS REGISTRATION</h2>
      <p className="reg-form__text">
        To get Started, you'll need to register and make payment for your
        selected crash course.
      </p>

      {/* Registering for someone */}

      <div className="form-group">
        <div>
          <label className="col-form-label-lg" htmlFor="inlineRadio2">
            Are you registering for someone?
          </label>
          {selectedRadioOption.selectedOption === "option2" && (
            <p style={{ opacity: 0.7 }}>
              Please provide the learners details instead
            </p>
          )}
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option2"
            checked={selectedRadioOption.selectedOption === "option2"}
            onChange={handleRadioOptionChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Yes
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option1"
            checked={selectedRadioOption.selectedOption === "option1"}
            onChange={handleRadioOptionChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            No
          </label>
        </div>
      </div>

      {/* FullName */}

      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          name="Full Name"
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Your FullName"
          required
          onChange={handleChange}
        />
      </div>
      {/* WhatsApp Name */}
      <div className="form-group">
        <label htmlFor="phone">WhatsApp number</label>
        <input
          name="WhatsApp Number"
          type="tel"
          className="form-control"
          id="phone"
          placeholder="Your Whatsapp number"
          required
          onChange={handleChange}
        />
      </div>

      {/* Email Address */}

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="Email"
          id="email"
          aria-describedby="Email"
          placeholder="Your email"
          title="The domain portion of the email address is invalid (the portion after the @)."
          pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
          onChange={handleChange}
          required
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      {/* Age Range */}

      <div className="form-group">
        <label htmlFor="ageRange">Age Range(years)</label>
        <select
          name="Age Range"
          id="ageRange"
          className="form-control"
          onChange={handleChange}
          onBlur={handleChange}
        >
          <option value="8-12">8-12</option>
          <option value="13-19">13-19</option>
          <option value="20 and above">20 and above</option>
        </select>
      </div>

      {/* Select Course */}
      <div className="form-group">
        <label htmlFor="course">Select Crash Course</label>
        <select
          name="Course"
          id="course"
          className="form-control"
          onChange={handleChange}
          onBlur={handleChange}
        >
          <option value="Web Design">Web Design</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Data Science">Data Science</option>
          <option value="Ethical Hacking">Ethical Hacking</option>
        </select>
      </div>

      {/* Any Message */}
      <div className="form-group">
        <label htmlFor="message">Any Message for Us</label>
        <textarea
          name="Message"
          className="form-control"
          id="message"
          rows="3"
          onChange={handleChange}
          onBlur={handleChange}
        ></textarea>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          name="Terms and Conditions"
          className="form-check-input"
          id="termsandconditions"
          onChange={handleChange}
          required
        />
        <label className="form-check-label" htmlFor="termsandconditions">
          I agree to <a href="/#">terms and conditions </a>
        </label>
      </div>
      <button type="submit" className="btn btn-submit">
        Submit And Proceed To Payment
      </button>
    </form>
  )
}

export default RegistrationForm
