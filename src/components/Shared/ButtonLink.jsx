import React from "react"
import PropTypes from "prop-types"

import "./ButtonLink.scss"

const ButtonLink = ({ bgColor, color, dest, text }) => {
  return <Link to=""></Link>
}

export default ButtonLink

ButtonLink.propTypes = {
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
