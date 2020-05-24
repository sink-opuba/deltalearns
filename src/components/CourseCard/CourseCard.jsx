import React from "react"
import PropTypes from "prop-types"
import StarRating from "../StarRating/StarRating"
import Image from "../image"
import "./CourseCard.scss"

const CourseCard = ({ course }) => (
  <div className="popular-course__card">
    <h3 className="popular-course__category">{course.category}</h3>
    <div className="popular-course__details text-left">
      <div className="popular-course__img">
        <Image filename={course.image} alt={course.title} />
      </div>
      <h4 className="popular-course__title">{course.title}</h4>
      <p className="popular-course__author">{course.author}</p>
      <div className="popular-course__rating">
        <StarRating rating={course.rating} />
      </div>
      <div className="popular-course__price">
        <span>#{course.slashedPrice}</span>
        <span>#{course.price}</span>
      </div>
    </div>
  </div>
)

export default CourseCard

CourseCard.protoTypes = {
  course: PropTypes.object.isRequired,
}
