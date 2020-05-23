import React, { Component } from "react"
import Slider from "react-slick"
import "./PopularCourses.scss"
import { SampleNextArrow, SamplePrevArrow } from "./CustomArrows"
// import StarRating from "../StarRating/StarRating"

export default class PopularCourses extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="slider-div">
        <h2> Single Item</h2>
        <Slider {...settings}>
          {[...Array(7)].map((el, i) => {
            const index = i + 1
            return (
              <div key={index}>
                <h3>{index}</h3>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
