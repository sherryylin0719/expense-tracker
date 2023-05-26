const bcrypt = require('bcryptjs')
const CategoryModel = require('../category')
const RecordModel = require('../record')
const UserModel = require('../user')

const { categories, users, records } = require('./data')
const db = require("../../config/mongoose")

db.once('open', () => {
  Promise.all(
    users.map((user, user_index) => {
      // 創建使用者資料(user): model.create
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(user.password, salt))
        .then(hash => UserModel.create({
          name: user.name,
          email: user.email,
          password: hash
        }))
      .then((user) => {
        console.log('user created')
        const userRecord = []
        return Promise.all(
          records.map(record => {
            return CategoryModel.findOne({name: record.category})
            .lean()
            .then((category) => {
              const categoryId = category._id
              record.userId = user._id
              record.categoryId = category._id
              userRecord.push(record)
            })
          })
        ).then(()=>{
          return RecordModel.create(userRecord)
        })
      })
    })
  ).then(() => {
    console.log('所有使用者與資料創建完成')
    process.exit()
  }).catch(error => {
    console.log(error)
  })
})