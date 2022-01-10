const router = require('express').Router()

router.get('/', (req, res, next) => {
 res.send('hello!')
})

router.get('/:projectName', (req, res, next) => {
  res.send('hello this is a project page!')
 })

module.exports = router
