import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"

// Don't forget to round-off the props.rating value
const StarRating = props => {
  const [rating, setRating] = useState(props.rating)
  const [hover, setHover] = useState(props.rating)
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label>
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
              size={50}
            />
          </label>
        )
      })}
      <span> {rating}</span>
    </div>
  )
}

export default StarRating

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
}
