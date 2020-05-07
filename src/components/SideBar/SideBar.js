import React, { useState } from "react"
import "./SideBar.scss"
import AvailableCourses from "../AvailableCourses/AvailableCourses"

const SideBar = ({ show, handleClick }) => {
  const [showCourseList, setShowCourseList] = useState(false)
  let sideBarClasses = "sidebar"
  if (show) {
    sideBarClasses = "sidebar open"
  }

  return (
    <>
      <nav className={sideBarClasses}>
        <div className="sidebar__header">
          <button className="sidebar__icon" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather cancel__icon"
            >
              <line x1="22" y1="10" x2="10" y2="22"></line>
              <line x1="10" y1="10" x2="22" y2="22"></line>
            </svg>
          </button>
        </div>

        <div className="sidebar__body">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a
                href="#startups"
                onClick={() => setShowCourseList(!showCourseList)}
              >
                Courses{" "}
                <span>
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L8.5 8.5L15 2"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <AvailableCourses open={showCourseList} />
            </li>
            <li>
              <a href="/">About DeltaLearns</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default SideBar
