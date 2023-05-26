const express = require("express")
const router = express.Router()
const RecordModel = require('../../models/record')
const { categories } = require('../../models/seeds/data')

router.get("/new", (req, res) => {
  return res.render("new")
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return RecordModel.findOne({_id, userId})
    .lean()
    .then(record => res.render("edit", { record, categories }))
    .catch(error => console.log(error))
})

module.exports = router