const router = require('express').Router()

router.get('/', (req, res, next) => {
 res.send('hello this is the personal route!')
 console.log('we are here!')
})

module.exports = router
