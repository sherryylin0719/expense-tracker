const categories = [
  {
    name: '家居物業',
    icon: 'fa-solid fa-house'
  },
  {
    name: '交通出行',
    icon: 'fa-solid fa-van-shuttle'
  },
  {
    name: '休閒娛樂',
    icon: 'fa-solid fa-face-grin-beam'
  },
  {
    name: '餐飲食品',
    icon: 'fa-solid fa-utensils'
  },
  {
    name: '其他',
    icon: 'fa-solid fa-pen'
  }
]

const users = [
  {
    name: 'User1',
    email: 'user1@example.com',
    password: '12345678'
  },
  {
    name: 'User2',
    email: 'user2@example.com',
    password: '12345678'
  }
]

const records = [
  {
    name: '熱狗',
    date: '2023-05-01',
    amount: 45,
    category: '餐飲食品'
  },
  {
    name: '公車',
    date: '2023-05-03',
    amount: 20,
    category: '交通出行'
  },
  {
    name: '膠帶',
    date: '2023-05-06',
    amount: 30,
    category: '其他'
  },
  {
    name: '椅子',
    date: '2023-05-10',
    amount: 300,
    category: '家居物業'
  },
  {
    name: '電影',
    date: '2023-05-16',
    amount: 230,
    category: '休閒娛樂'
  }
]

module.exports = { categories, users, records }
