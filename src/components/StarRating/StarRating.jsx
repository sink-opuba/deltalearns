import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

const StarRating = () => {
  const [rating, setRating] = useState(null)
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={rating}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar className="star" size={50} />
          </label>
        )
      })}
    </div>
  )
}

export default StarRating
