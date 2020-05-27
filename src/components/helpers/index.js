const { courses } = require("../data/courses.json")

const getCategory = data => {
  let category = data.map(el => el.category)
  category = [...new Set(category)]
  return category
}

getCategory(courses)
