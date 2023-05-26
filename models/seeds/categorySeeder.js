const CategoryModel = require('../category')
const { categories } = require('./data')
const db = require("../../config/mongoose")

db.once('open', async () => {
  try {
    await CategoryModel.create(categories)
    console.log('categorySeeder created!')
    process.exit()

  } catch (err) {
    console.log(err)
  }
})