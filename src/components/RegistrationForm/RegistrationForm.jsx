import React, { useState } from "react"
import "./RegistrationForm.scss"

const RegistrationForm = () => {
  const [selectedRadioOption, setSelectedRadioOption] = useState({
    selectedOption: "option1",
  })

  const handleRadioOptionChange = changeEvent => {
    setSelectedRadioOption({ selectedOption: changeEvent.target.value })
  }
  return (
    <form className="registration-form">
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
            yes
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

      <div class="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          name="Full Name"
          type="text"
          class="form-control"
          id="fullName"
          placeholder="Your FullName"
          required
        />
      </div>
      {/* WhatsApp Name */}
      <div class="form-group">
        <label htmlFor="phone">WhatsApp number</label>
        <input
          name="WhatsApp Number"
          type="tel"
          class="form-control"
          id="phone"
          placeholder="Your Whatsapp number"
          required
        />
      </div>

      {/* Email Address */}

      <div class="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          class="form-control"
          name="Email"
          id="email"
          aria-describedby="Email"
          placeholder="Enter email"
          required
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      {/* Age Range */}

      <div className="form-group">
        <label htmlFor="ageRange">Age Range(years)</label>
        <select name="Age Range" id="ageRange" className="form-control">
          <option value="8-12">8-12</option>
          <option value="13-19">13-19</option>
          <option value="20 and above">20 and above</option>
        </select>
      </div>

      {/* Select Course */}
      <div className="form-group">
        <label htmlFor="course">Select Crash Course</label>
        <select name="Course" id="course" className="form-control">
          <option value="Web Design">Web Design</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Data Science">Data Science</option>
          <option value="Ethical Hacking">Ethical Hacking</option>
        </select>
      </div>

      {/* Any Message */}

      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="termsandconditions"
          required
        />
        <label class="form-check-label" for="termsandconditions">
          I agree to <a href="/#">terms and conditions </a>
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit And Proceed To Payment
      </button>
    </form>
  )
}

export default RegistrationForm
