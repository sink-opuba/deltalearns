import React from "react"
import StarRating from "../StarRating/StarRating"
import Image from "../image"
import "./CourseCard.scss"

const CourseCard = () => (
  <div className="popular-course__card">
    <h3 className="popular-course__category">I.C.T</h3>
    <div className="popular-course__details text-left">
      <div className="popular-course__img">
        <Image filename="web-design-image.jpg" alt="web-design-img" />
      </div>
      <h4 className="popular-course__title">Website Design (Wordpress)</h4>
      <p className="popular-course__author">Paul Okoro</p>
      <div className="popular-course__rating">
        <StarRating rating={4.0} />
      </div>
      <div className="popular-course__price">
        <span>#30, 000</span>
        <span>#3, 000</span>
      </div>
    </div>
  </div>
)

export default CourseCard
