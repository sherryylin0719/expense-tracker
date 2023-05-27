const express = require('express')
const router = express.Router()
const RecordModel = require('../../models/record')
const CategoryModel = require('../../models/category')

router.get('/new', (req, res) => {
  return CategoryModel.find()
    .lean()
    .then((categories) => res.render('new', { categories }))
    .catch(error => console.log(error))
})

router.post('/new', (req, res) => {
  const userId = req.user._id
  const recordBody = req.body
  return RecordModel.create({ ...recordBody, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  CategoryModel.find()
    .lean()
    .then((categories) => {
      return RecordModel.findOne({ _id, userId })
        .populate('categoryId')
        .lean()
        .then((record) => {
          record.date = record.date.toISOString().slice(0, 10)
          res.render('edit', { record, categories })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

router.put('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const recordBody = req.body
  return RecordModel.findOneAndUpdate({ _id, userId }, { ...recordBody })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return RecordModel.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
