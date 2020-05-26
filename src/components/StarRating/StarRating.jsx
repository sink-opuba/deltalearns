import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"
import "./StarRating.scss"

// Don't forget to round-off the props.rating value if they're decimals
const StarRating = props => {
  const [rating, setRating] = useState(props.rating)
  const [hover, setHover] = useState(props.rating)
  return (
    <div className="star-rating-container">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(props.rating)}
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={14}
            />
          </label>
        )
      })}
      <span className="star-rating">{rating}.0</span>
    </div>
  )
}

export default StarRating

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
}
