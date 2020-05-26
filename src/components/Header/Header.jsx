import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"
import DrawToggleButton from "../DrawToggleButton/DrawToggleButton"
import SideBar from "../SideBar/SideBar"
import ButtonLink from "../Shared/ButtonLink"
import AvailableCourses from "../AvailableCourses/AvailableCourses"

const Header = ({ siteTitle, path }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const toggleSideBarClick = () => setSideBarOpen(!sideBarOpen)
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">DeltaLEARNS</Link>
        </div>

        <div className="header-links">
          <div className="header-links__courses">
            <AvailableCourses  />
          </div>
          {/* if were in /register/ don't show register button */}
          {path !== "/register/" && (
            <div className="header-links__btn">
              <ButtonLink dest="/register">Register</ButtonLink>
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
