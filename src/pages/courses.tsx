import React from "react"
import { PageProps, Link } from "gatsby"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ButtonLink from "../components/Shared/ButtonLink"
import { courses } from "../components/data/courses.json"

const getCategory = data => {
  // get all course categories as a new array of strings
  let category = data.map(el => el.category)
  category = [...new Set(category)]
  return category
}

const CoursesPage = (props: PageProps) => (
  <Layout path={props.path}>
    <SEO title="Courses" />
    <div className="courses-container">
      {/* loop through all course categories and render */}
      {getCategory(courses).map((category, i) => (
        <div key={`${category}i`} className="courses-category__card">
          <h2>{category}</h2>
          <div className="courses-category__accordion">
            <Accordion>
              {/* filter courses by categories and render all courses in the category as a card in the accordion */}
              {courses
                .filter(course => course.category === category)
                .map((course, index) => (
                  <Card key={`${category}${index}`}>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={`${category}-${index}`}
                    >
                      {course.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${category}-${index}`}>
                      <Card.Body>
                        <Card.Title>What you'll learn</Card.Title>
                        <Card.Text>{course.description}</Card.Text>
                        <Card.Title>Author</Card.Title>
                        <Card.Text>{course.author}</Card.Text>
                        <Card.Title>Price</Card.Title>
                        <Card.Text>₦{course.price}</Card.Text>
                        <ButtonLink dest="/register">Register</ButtonLink>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default CoursesPage
