const router = require('express').Router()

router.use('/projects', require('./projects'))
// router.use('/personal', require('./personal'))

// error handling
router.use((req, res, next) => {
  const error = new Error('Page not found')
  error.status = 404
  next(error)
})

module.exports = router;
