import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"
import DrawToggleButton from "../DrawToggleButton/DrawToggleButton"
import SideBar from "../SideBar/SideBar"
import AvailableCourses from "../AvailableCourses/AvailableCourses"

const Header = ({ siteTitle, path }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const toggleSideBarClick = () => setSideBarOpen(!sideBarOpen)
  const [showCourseList, setShowCourseList] = useState(false)
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">DeltaLEARNS</Link>
        </div>

        <div className="header-links">
          <div className="header-links__courses">
            <h3 onClick={() => setShowCourseList(!showCourseList)}>
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
              <AvailableCourses open={showCourseList} position="absolute" />
            </h3>
          </div>
          {/* if were in /register/ don't show register button */}
          {path !== "/register/" && (
            <div className="header-links__btn">
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
        <div className="nav-toggle">
          <DrawToggleButton click={toggleSideBarClick} />
        </div>
      </header>
      <SideBar show={sideBarOpen} handleClick={toggleSideBarClick} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
