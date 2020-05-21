import React from "react"

const customStyle = {
  display: "block",
  background: "#4db0e7",
  borderRadius: "50%",
}

export const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        ...customStyle,
      }}
      onClick={onClick}
    />
  )
}

export const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, ...customStyle }}
      onClick={onClick}
    />
  )
}
