import React from "react"
import "./AvailableCourses.scss"
import PropTypes from "prop-types"

const AvailableCourses = ({ open, position = "relative" }) => {
  const courseListClasses = open ? "course-list open" : "course-list close"
  return (
    <ul className={courseListClasses} style={{position}}>
      <li className="course-list__item">Web Design</li>
      <li className="course-list__item">Graphic Design</li>
      <li className="course-list__item">Data Science</li>
      <li className="course-list__item">Ethical Hacking</li>
    </ul>
  )
}

export default AvailableCourses

AvailableCourses.propTypes = {
  open: PropTypes.bool.isRequired,
}
