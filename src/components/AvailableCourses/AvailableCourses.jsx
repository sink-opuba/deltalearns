import React from "react"
import "./AvailableCourses.scss"
import PropTypes from "prop-types"
import data from "../data/courses.json"

const AvailableCourses = ({ open, position = "relative" }) => {
  const courseListClasses = open ? "course-list open" : "course-list close"

  // console.log(data.courses.map(course => course.course))
  return (
    <ul className={courseListClasses} style={{ position }}>
      {data.courses.map(course => {
        return (
          <li key={course.id} id={course.id} className="course-list__item">
            {course.course}
          </li>
        )
      })}
    </ul>
  )
}

export default AvailableCourses

AvailableCourses.propTypes = {
  open: PropTypes.bool.isRequired,
}
