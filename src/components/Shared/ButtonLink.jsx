import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// import "./ButtonLink.scss"

const ButtonLink = ({ bgColor, color, dest, children, state }) => {
  return (
    <Link
      style={{ backgroundColor: bgColor, color }}
      className="btn-link"
      to={`${dest}`}
      state={state}
    >
      {children}
    </Link>
  )
}

export default ButtonLink

ButtonLink.defaultProps = {
  bgColor: "#4db0e7",
  color: "#ffffff",
  dest: "/",
}

ButtonLink.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  dest: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  state: PropTypes.shape({
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
  }),
}
