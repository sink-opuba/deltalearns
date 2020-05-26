import React from "react"
import "./AvailableCourses.scss"
import data from "../data/courses.json"
import Dropdown from "react-bootstrap/Dropdown"

const AvailableCourses = () => {
  return (
    <div className="available-courses">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Courses
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {data.courses.map(course => {
            return (
              <Dropdown.Item key={course.id} href={`/courses#${course.id}`}>
                {course.title}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default AvailableCourses
