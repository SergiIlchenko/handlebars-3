const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    text: 'Click me',
  })
})

router.get('/users', function (req, res) {
  res.render('user-list', {
    layout: 'header',
    title: 'User list page',

    data: {
      userlist: [
        {
          id: 5123,
          name: 'Ivan',
          isAdmin: true,
          isConfirm: true,
          balance: 100,
        },
        {
          id: 5555,
          name: 'Dima',
          isAdmin: false,
          isConfirm: false,
          balance: 0,
        },
        {
          id: 5555,
          name: 'Vasya',
          isAdmin: true,
          isConfirm: true,
          balance: null,
        },
      ],
    },
  })
})
module.exports = router
