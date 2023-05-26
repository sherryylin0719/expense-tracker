const express = require("express")
const router = express.Router()
const CategoryModel = require('../../models/category')
const RecordModel = require('../../models/record')

router.get('/', (req, res) => {
  const userId = req.user._id
  let totalAmount = 0
  return CategoryModel.find()
  .lean()
  .then((categories) => {
    return RecordModel.find({ userId })
      .populate('categoryId')
      .lean()
      .sort({ date: 'desc' })
      .then((records) => {
        records.forEach((record) => {
          record.date = record.date.toISOString().slice(0,10)
          totalAmount += record.amount
        })
        return res.render('index', { records, categories, totalAmount })
      })
  .catch(error => console.log(error))
  })
})

module.exports = router